# syntax=docker/dockerfile:1

ARG PHP_VERSION=8.5
ARG NODE_VERSION=24

# ---------------------------------------------------------------------------
# base: FrankenPHP (Caddy + PHP) with production PHP config and a non-root user
# ---------------------------------------------------------------------------
FROM dunglas/frankenphp:1-php${PHP_VERSION} AS base

# pdo_mysql for the database, pcntl so queue workers handle timeouts and shut down gracefully.
# OPcache is built into PHP 8.5, so it needs no install.
RUN install-php-extensions pcntl pdo_mysql

RUN cp "$PHP_INI_DIR/php.ini-production" "$PHP_INI_DIR/php.ini"
COPY docker/php/production.ini "$PHP_INI_DIR/conf.d/zz-production.ini"
COPY docker/frankenphp/Caddyfile /etc/frankenphp/Caddyfile

# Run unprivileged: drop FrankenPHP's bind capability (it listens on :8080) and hand it Caddy's state dirs
RUN useradd --create-home --uid 1000 laravel \
    && setcap -r /usr/local/bin/frankenphp \
    && chown -R laravel:laravel /config/caddy /data/caddy

WORKDIR /app

# ---------------------------------------------------------------------------
# vendor: production Composer dependencies + optimised autoloader
# ---------------------------------------------------------------------------
FROM base AS vendor

RUN apt-get update \
    && apt-get install -y --no-install-recommends unzip \
    && rm -rf /var/lib/apt/lists/*

COPY --from=composer:2 /usr/bin/composer /usr/bin/composer

COPY composer.json composer.lock ./
RUN --mount=type=cache,target=/root/.composer/cache \
    composer install --no-dev --no-interaction --no-progress --prefer-dist --no-scripts --no-autoloader

COPY . .
RUN composer dump-autoload --no-dev --classmap-authoritative

# ---------------------------------------------------------------------------
# assets: Vite client build (public/build) and self-contained SSR bundle (bootstrap/ssr)
# ---------------------------------------------------------------------------
FROM node:${NODE_VERSION}-alpine AS assets

WORKDIR /app

COPY package.json package-lock.json ./
RUN --mount=type=cache,target=/root/.npm \
    npm ci --no-audit --no-fund

COPY vite.config.js tsconfig.json ./
COPY resources ./resources

# Vite inlines VITE_* variables at build time
ARG VITE_RECAPTCHA_SITE_KEY
ENV VITE_RECAPTCHA_SITE_KEY=${VITE_RECAPTCHA_SITE_KEY}

RUN npm run build

# ---------------------------------------------------------------------------
# ssr: Inertia SSR server — the bundle has every dependency inlined, so no node_modules
# ---------------------------------------------------------------------------
FROM node:${NODE_VERSION}-alpine AS ssr

ENV NODE_ENV=production
WORKDIR /app

COPY --from=assets /app/bootstrap/ssr ./bootstrap/ssr

USER node
EXPOSE 13714

HEALTHCHECK --interval=30s --timeout=5s --start-period=10s --retries=3 \
    CMD wget -qO- http://127.0.0.1:13714/health || exit 1

CMD ["node", "bootstrap/ssr/ssr.js"]

# ---------------------------------------------------------------------------
# app: the Laravel application (web, queue worker and migrations all use this image)
# ---------------------------------------------------------------------------
FROM base AS app

ENV APP_ENV=production \
    APP_DEBUG=false \
    LOG_CHANNEL=stderr

# Code is owned by root and read-only to the app; only storage/ and bootstrap/cache/ are writable
COPY --from=vendor /app /app
COPY --from=assets /app/public/build ./public/build
# Inertia checks the SSR bundle exists before calling the SSR server
COPY --from=assets /app/bootstrap/ssr ./bootstrap/ssr
COPY --chmod=755 docker/entrypoint.sh /usr/local/bin/entrypoint

RUN mkdir -p storage/framework/cache/data storage/framework/sessions storage/framework/views storage/logs bootstrap/cache \
    && chown -R laravel:laravel storage/framework storage/logs bootstrap/cache \
    && php artisan storage:link

USER laravel
EXPOSE 8080

HEALTHCHECK --interval=30s --timeout=5s --start-period=20s --retries=3 \
    CMD curl -fsS http://127.0.0.1:8080/up || exit 1

ENTRYPOINT ["entrypoint"]
CMD ["frankenphp", "run", "--config", "/etc/frankenphp/Caddyfile", "--adapter", "caddyfile"]
