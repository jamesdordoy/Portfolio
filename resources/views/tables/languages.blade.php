@extends('layouts.dash')

@section('content')

    <div class="row">

        @if ($errors)

        @endif

        <button
            data-toggle="modal"
            data-target="#myModal"
            style="width: auto; position: absolute; top: 10px; right: 10px;"
            type="button"
            class="btn-success">
            <i class="fa fa-plus" aria-hidden="true"></i>
            Add New Language
        </button>

        <languages-table
            languages="{{ json_encode($languages) }}">
        </languages-table>

    </div>

    @include('forms.add_language')
@endsection

@section('scripts')

<!-- Scroll Reveal Libary CDN -->
<script src="/js/FakeForm.js"></script>

  <!-- Particles JS Libary CDN -->
<script src="https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js"></script>

<!-- P5 JS Graphics Libary CDN -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.5.14/p5.min.js"></script>

<!-- Scroll Reveal Libary CDN -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/scrollReveal.js/3.3.6/scrollreveal.js"></script>

<script>

window.onload = function(e)
{

}

</script>

@endsection
