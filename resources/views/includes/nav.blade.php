<nav>
	<div class="handle"><i class="fa fa-bars fa-2x" aria-hidden="true"></i><h2>James Dordoy</h2></div>
	<ul class="navBar">
		<li><h2>James Dordoy</h2></li>
		<li><a href="/"><i class="fa fa-home"></i> Home</a></li>
		<li><a href="#projects"><i class="fa fa-tasks"></i> Projects</a></li>
		<li><a href="#code" class="nav_libary"><i class="fa fa-code"></i> Code</a></li>
		<li><a href="#social"><i class="fa fa-user"></i> About Me</a></li>
		<li><a href="#contact"><i class="fa fa-phone"></i> Contact Me</a></li>

		@if (Route::has('login'))
			@auth
				<li><a class='clickLogin' href='/dash'><i class="fa fa-tachometer" aria-hidden="true"></i> Dash</a></li>
				<li><a class='clickLogin' href='{{ url('/logout') }}'><i class='fa fa-sign-out' aria-hidden='true'></i> Logout</a></li>
			@else
				<li><a class='clickLogin' href='/login'><i class='fa fa-sign-in' aria-hidden='true'></i> Login</a></li>
			@endauth
        @endif
	</ul>
</nav>
