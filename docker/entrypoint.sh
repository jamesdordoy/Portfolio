#!/bin/sh
set -e

# Cache config, routes, views and events against the runtime environment (env vars from compose)
php artisan optimize

exec "$@"
