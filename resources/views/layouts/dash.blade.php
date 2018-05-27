<html lang="{{ app()->getLocale() }}">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="csrf-token" content="{{ csrf_token() }}">

        <meta http-equiv="X-UA-Compatible" content="ie=edge">

		<meta name="keywords" content="Portfolio, Webdesign, Software, HTML, Javascript, CSS, PHP, AJAX, ASP, ASP.Net, Java, Android, C++">
		<meta name="description" content="James Ryan Dordoy - Portfolio">
        <meta name="author" content="">
        <!-- FONTAWESOME INCLUDE -->
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">

        <link rel="stylesheet" href="/css/app.css">
        <link rel="stylesheet" href="/css/main.css">

    	<title>James Dordoy</title>
        <!-- Fonts -->
        <link href="https://fonts.googleapis.com/css?family=Raleway:100,600" rel="stylesheet" type="text/css">
    </head>
    <body>
        @include('includes.dash_header')
        <div class='warpper container-fluid' id="app">
            <div class="row">

                <div class="col-sm-2" style="padding: 0; margin:0;">
                    @include('includes.dash_nav')
                </div>

                <div class="col-sm-10" style="padding: 20px 40px;">
                    @yield('content')
                </div>
            </div>

            @include('includes.dash_footer')
        </div>

        <script src="/js/app.js"></script>

        @yield('scripts')
    </body>
</html>
