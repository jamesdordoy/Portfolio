<!doctype html>
<html lang="{{ app()->getLocale() }}">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="csrf-token" content="{{ csrf_token() }}">

        <meta http-equiv="X-UA-Compatible" content="ie=edge">

		<meta name="keywords" content="Portfolio, Webdesign, Software, HTML, Javascript, CSS, PHP, AJAX, ASP, ASP.Net, Java, Android, C++">
		<meta name="description" content="James Ryan Dordoy - Portfolio">

        <!-- FONTAWESOME INCLUDE -->
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">

        <link rel="stylesheet" href="/css/app.css">
        <link rel="stylesheet" href="/css/main.css">

    	<title>James Dordoy</title>
        <!-- Fonts -->
        <link href="https://fonts.googleapis.com/css?family=Raleway:100,600" rel="stylesheet" type="text/css">
    </head>
    <body>
        <div class='warpper fullscreen' id="app">

            @include('includes.nav')

            @yield('hello')

            @yield('main')

            @include('includes.footer')

        </div>


        @yield('scripts')
        <script src="/js/app.js"></script>

    </body>
</html>
