@extends('layouts.layout2017')

@section('hello')

<particles-view></particles-view>

@endsection

@section('main')

    <projects projects="{{ json_encode($projects) }}"></projects>

    <languages languages="{{ json_encode($langauges) }}"></languages>

    <div class="social">
      <span class="anchor" id="social"></span>
      <h2>About Me</h2>

      <section class="twitter">

        <div class="bio">
          <h3>Bio</h3>
          <p>My name is James and i have been creating software for over 7 years. Starting with C++ at college, i was captivated by programming and continued learning with HTML, CSS &amp; JavaScript</p><br>
          <p>After learning basic markup languages and JavaScript i learnt VBA for office automation tasks and then started using Microsoft Access Databases for storing data for use with Excel and JavaScript Clients.</p><br>

          <p>Before attending University, i also was creating small WordPress websites for customers and my own amusement. After my first year i became captivated by PHP and was using the language for all web projects in L.A.M.P. environments. </p><br>

          <p>I have used PHP for many different projects throughout my programming career including creating a simple Forward Chaining Engine &amp; Composable MySQL Tables Written in PHP which is like a ORM. </p>

        </div><br><br>

      </section>
      <div class="textFloat"></div>

      <tweets tweets="{{ json_encode($tweets) }}"></tweets>

      <div style="clear:both;"></div>
    </div>

    <section class="end">

      <div class="stillworkingon">
        <h2>Stuff im still working on:</h2>
        <div class="pokeball pokeball-animated"></div>
      </div>

      <div class="contact">
        <span class="anchor" id="contact"></span>
        <h2>Contact Me</h2>

        <form class="contact_form">
          <div class="form-group">
            <p>Please leave your details &amp; A short message &amp; I will get back to you.</p>

            <label class="form-check-label" for="contact_name">Name:</label>
            <input class="form-control" type="text" name="name" placeholder="Joe Bloggs"><br>

            <label class="form-check-label" for="contact_email">E-Mail:</label>
            <input class="form-control" type="email" name="email" placeholder="example@hotmail.com"><br>

            <label class="form-check-label" for="contact_message">Message:</label>
            <textarea class="form-control" rows="10" name="message" placeholder="Hello, World!"></textarea><br>

            <button class="contact_submit btn">Submit</button>
          </div>
        </form>

    </div>

      <div style="clear:both;"></div>
    </section>

@endsection

@section('scripts')

<!-- P5 JS Graphics Libary CDN -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.5.14/p5.min.js"></script>

<!-- Scroll Reveal Libary CDN -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/scrollReveal.js/3.3.6/scrollreveal.js"></script>


@endsection
