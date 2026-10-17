[![Pest](https://github.com/jamesdordoy/Portfolio/actions/workflows/pest.yml/badge.svg)](https://github.com/jamesdordoy/Portfolio/actions/workflows/pest.yml)
[![Vitest](https://github.com/jamesdordoy/Portfolio/actions/workflows/vitest.yml/badge.svg)](https://github.com/jamesdordoy/Portfolio/actions/workflows/vitest.yml)
[![codecov](https://codecov.io/gh/jamesdordoy/Portfolio/branch/master/graph/badge.svg?token=LEVHXT24SG)](https://codecov.io/gh/jamesdordoy/Portfolio)
[![statuscake](https://app.statuscake.com/button/index.php?Track=7143659&Days=1&Design=2)](https://www.statuscake.com)

# Portfolio
My personal portfolio built with Laravel, Vue & Tailwind.

## Deps

* [PHP](https://www.php.net/releases/8.5/en.php) 8.5+
* [Vue.js](https://vuejs.org/) 3.x
* [TypeScript](https://www.typescriptlang.org/) 6.x
* [Laravel](http://laravel.com/docs/) 13.x
* [Inertiajs](https://inertiajs.com/) 3.x
* [Tailwind](https://tailwindcss.com/) 4.x
* [Redis](https://redis.io/)
* [Vite](https://vitejs.dev/)

## Live URL
[https://jamesdordoy.co.uk/](https://jamesdordoy.co.uk/)

## Production (Docker)

`compose.yaml` runs the full stack: `web` (FrankenPHP), `worker` (queue), `ssr` (Inertia SSR), `mysql` and `redis`.
Migrations run automatically (`migrate` service) before the web and worker containers start.
The site listens on plain HTTP (`127.0.0.1:8080` by default) for a Cloudflare Tunnel to point at.

```bash
cp .env.production.example .env   # then fill it in
docker compose up -d --build      # first deploy and every update (after git pull)
docker compose logs -f web worker # logs
```

Seed a fresh database with `docker compose run --rm migrate php artisan db:seed --force`.
