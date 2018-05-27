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
          <form method="POST" action="/dash/languages" enctype="multipart/form-data">

              <div class="form-group">
                  {{ csrf_field() }}
                  <label for="id">#</label>
                  <input type="number" name="id" value="{{ $id }}" class="form-control" required/>
              </div>
              <div class="form-group">
                  <label for="name">Name</label>
                  <input type="text" name="name" placeholder="Name" class="form-control" required/>
              </div>
              <div class="form-group">
                  <label for="description">Description</label>
                  <input type="text" name="description" placeholder="Description" class="form-control" required/>
              </div>

              <div class="form-group">

                  <label for="thumbnail">Icon</label>
                  <input type="file" name="icon" required/>
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
</div>