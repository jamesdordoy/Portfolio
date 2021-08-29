[https://jamesdordoy.co.uk/](https://jamesdordoy.co.uk/)

Generate Test Coverage Report

`vendor/bin/phpunit --coverage-html storage/report/`

Adding phpcode sniffer as a pre-commit

```bash
cp .githooks/pre-commit .git/hooks/pre-commit
```

```bash
chmod +x .git/hooks/pre-commit
```

Running code sniffer using docker
```bash
docker run --rm \
    -u "$(id -u):$(id -g)" \
    -v $(pwd):/opt \
    -w /opt \
    laravelsail/php80-composer:latest \
    php vendor/bin/phpcbf

```
