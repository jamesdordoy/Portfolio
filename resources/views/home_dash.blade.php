@extends('layouts.dash')

@section('content')

    <h1>main dash</h1>

    <div class="row">

        <div class="col-sm-4">
            <div class="panel panel-primary">
                <div class="panel-heading">
                    <p>Complete Projects: </p>
                </div>
                <div class="panel-body">
                    <h2 class="text-center">{{ $projectCompleteCount }}</h2>
                </div>
                <div class="panel-footer">
                    <p>Projects</p>
                </div>
            </div>
        </div>
        <div class="col-sm-4">
            <div class="panel panel-primary">
                <div class="panel-heading">
                    <p>Incomplete Projects: </p>
                </div>
                <div class="panel-body">
                    <h2 class="text-center">{{ $projectIncompleteCount }}</h2>
                </div>
                <div class="panel-footer">
                    <p>Projects</p>
                </div>
            </div>
        </div>
        <div class="col-sm-4">
            <div class="panel panel-primary"  style="padding-right: 0;">
                <div class="panel-heading">
                    <p>Incomplete Projects: </p>
                </div>
                <div class="panel-body">
                    <h2 class="text-center">{{ $projectIncompleteCount + $projectCompleteCount }}</h2>
                </div>
                <div class="panel-footer">
                    <p>Projects</p>
                </div>
            </div>
        </div>
    </div>


    <div class="row">

        <div class="col-sm-4">
            <div class="panel panel-primary">
                <div class="panel-heading">
                    <p>Language Count: </p>
                </div>
                <div class="panel-body">
                    <h2 class="text-center">{{ $languages }}</h2>
                </div>
                <div class="panel-footer">
                    <p>Projects</p>
                </div>
            </div>
        </div>
    </div>




@endsection

@section('scripts')

  <!-- Particles JS Libary CDN -->
<script src="https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js"></script>

<!-- P5 JS Graphics Libary CDN -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.5.14/p5.min.js"></script>

<!-- Scroll Reveal Libary CDN -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/scrollReveal.js/3.3.6/scrollreveal.js"></script>


@endsection
