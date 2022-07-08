# Portfolio
My personal portfolio built with Laravel, Vue & Tailwind.

## Requirements

* [PHP](https://www.php.net/releases/8.0/en.php) 8.1+
* [Vue.js](https://vuejs.org/) 3.x
* [Laravel](http://laravel.com/docs/) 9.x
    * [Horizon](https://laravel.com/docs/8.x/horizon)
    * [Telescope](https://laravel.com/docs/8.x/telescope)
    * [Sail](https://laravel.com/docs/8.x/sail) (Optional)
* [Tailwind](https://tailwindcss.com/) 3.*
* [Redis](https://redis.io/)
* [Vite](https://vitejs.dev/)

## Live URL
[https://jamesdordoy.co.uk/](https://jamesdordoy.co.uk/)


## Staging URL
[https://staging.jamesdordoy.co.uk/](https://staging.jamesdordoy.co.uk/)

## Local Development

- Mac use Valet, Homestead or Laravel Sail
- Windows use Laravel Sail or Laragon

Adding phpcode sniffer as a pre-commit for local dev

```bash
cp .githooks/pre-commit .git/hooks/pre-commit && chmod +x .git/hooks/pre-commit
```

Running code sniffer fix using Docker
```bash
docker run --rm \
    -u "$(id -u):$(id -g)" \
    -v $(pwd):/opt \
    -w /opt \
    laravelsail/php81-composer:latest \
    php vendor/bin/phpcbf
```