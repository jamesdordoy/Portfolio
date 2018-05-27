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
            Add New Tweet
        </button>

        <tweets-table tweets="{{ json_encode($tweets) }}"></tweets-table>
    </div>

    <!-- Modal -->
    <div id="myModal" class="modal fade" tabindex="-1" role="dialog">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h3 class="modal-title">Add New Project</h3>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <form method="POST" action="/dash/projects" enctype="multipart/form-data">

                <div class="form-group">
                    {{ csrf_field() }}
                    <label for="id">#</label>
                    <input type="number" name="id" value="" class="form-control" required/>

                    <label for="name">Name</label>
                    <input type="text" name="name" placeholder="Name" class="form-control" required/>

                    <label for="description">Description</label>
                    <input type="text" name="description" placeholder="Description" class="form-control" required/>

                    <label for="owner">Owner</label>
                    <input type="text" name="owner" placeholder="Owner" class="form-control" required/>

                    <label for="complete">Completed?</label>
                    <select name="complete"  class="form-control" required>
                        <option value="true">Yes</option>
                        <option value="false">No</option>
                    </select>
                </div>

                <div class="form-group">
                    <label for="link">Project Link</label>
                    <input type="text" name="link" placeholder="Link" class="form-control"/>

                    <label for="thumbnail">Thumbnail</label>
                    <input type="file" name="thumbnail" required/>
                </div>

                <div class="form-group">
                    <button type="submit" class="btn btn-success">
                        <i class="fa fa-floppy-o" aria-hidden="true"></i>
                        Save changes
                    </button>
                    <button type="button" class="btn btn-danger" data-dismiss="modal">
                        <i class="fa fa-times" aria-hidden="true"></i>
                        Close
                    </button>
                </div>
            </form>
          </div>
        </div>
      </div>
    </div>
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
