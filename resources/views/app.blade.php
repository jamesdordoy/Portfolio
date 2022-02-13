<!DOCTYPE html>
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

        <title inertia>{{ config('app.name', 'James Dordoy - Portfolio') }}</title>

        <!-- Fonts -->
        <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700&display=swap" rel="stylesheet" type="text/css">
        <link href="https://fonts.googleapis.com/css?family=Varela+Round" rel="stylesheet" type="text/css">
        <link href="https://fonts.googleapis.com/css?family=Raleway:100,600" rel="stylesheet" type="text/css">
    
        <!-- SASS -->
        <link rel="stylesheet" href="{{ mix('css/app.css') }}">

        <!-- Styles -->
        <link rel="stylesheet" href="{{ mix('css/styles.css') }}">

        <!-- Scripts -->
        @routes
        <script src="{{ mix('js/app.js') }}" defer></script>

        <!-- Global site tag (gtag.js) - Google Analytics -->
        <script async src="https://www.googletagmanager.com/gtag/js?id=UA-154219567-1"></script>

        <script>
            window.dataLayer = window.dataLayer || [];
            function gtag(){ dataLayer.push(arguments); }
            gtag('js', new Date());
            gtag('config', 'UA-154219567-1');
        </script>
    </head>
    <body class="font-sans antialiased">
        @inertia
    </body>
</html>
