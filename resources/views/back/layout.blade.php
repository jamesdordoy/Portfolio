<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="description" content="James Ryan Dordoy - Portfolio">
    <meta name="keywords" content="Portfolio, Web Design, Software, HTML, Javascript, CSS, PHP, AJAX, Java, Android">
    <meta name="mobile-web-app-capable" content="yes">
    <meta name="apple-mobile-web-app-capable" content="yes">
    <meta name="msapplication-starturl" content="/">
    <meta name="theme-color" content="#e5e5e5">

    <link rel="manifest" href="/manifest.json">

    <link href="https://fonts.googleapis.com/css?family=Raleway:100,600" rel="stylesheet" type="text/css">
    <link href="https://fonts.googleapis.com/css?family=Varela+Round" rel="stylesheet">


    <link rel="stylesheet" href="{{ mix("/css/app.css") }}">

    <title>{{ config('app.name', 'James Dordoy - Portfolio') }}</title>
</head>

<body class="bg-black font-sans font-normal">
<div id="app" class="h-full">
    @yield('main')
</div>
@yield('scripts')
<script src="{{ mix("/js/app.js") }}"></script>
</body>
</html>
