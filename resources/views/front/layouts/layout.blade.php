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

    <title>{{ config('app.name', 'James Dordoy - Portfolio') }}</title>

    <link rel="manifest" href="/manifest.json">

    <link href="https://fonts.googleapis.com/css?family=Varela+Round" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Raleway:100,600" rel="stylesheet" type="text/css">

    <!-- Global site tag (gtag.js) - Google Analytics -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=UA-154219567-1"></script>
    
    <script>
        window.dataLayer = window.dataLayer || [];
        function gtag(){ dataLayer.push(arguments); }
        gtag('js', new Date());
        gtag('config', 'UA-154219567-1');
    </script>

    <link rel="stylesheet" href="{{ mix("/css/app.css") }}">
    <script src="{{ mix("/js/app.js") }}" defer></script>
</head>
<body class="bg-black font-sans font-normal h-full">
    <div class='h-full' id="app">
        @yield('main')
    </div>
    @yield('scripts')
</body>
</html>