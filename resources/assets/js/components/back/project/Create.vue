<template>
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
                        <label for="id">#</label>
                        <input type="number" name="id" value="" class="form-control" required/>

                        <label for="name">Name</label>
                        <input type="text" name="name" placeholder="Name" class="form-control" required/>

                        <label for="description">Description</label>
                        <input type="text" name="description" placeholder="Description" class="form-control" required/>

                        <label for="owner">Owner</label>
                        <input type="text" name="owner" placeholder="Owner" class="form-control" required/>

                        <label for="complete">Completed?</label>
                        <select name="complete" class="form-control" required>
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
</template>

<style scoped>

</style>

<script>

export default {

}

</script>