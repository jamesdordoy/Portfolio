<?php

namespace App\Http\Controllers\Back;

use App\Models\Project;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Http\Resources\ProjectsResource;

use App\Http\Requests\ProjectRequest;

class ProjectController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {

    }

    /**
     * GET show data.
     *
     * @param  Request $request
     * @return Response
     */
    public function index(Request $request)
    {   
        $id = Project::max('id') + 1;
        $projects = Project::where('private', 1)
            ->orderBy('id', 'ASC')
            ->paginate();

        return view('back.tables.projects', [
            'projects' => $projects,
        ]);
    }

    /**
     * GET show data.
     *
     * @param  Request $request
     * @return Response
     */
    public function ajax(Request $request)
    {   
        $columns = ['id', 'name', 'link'];
        $length = $request->input('length');
        $column = $request->input('column'); //Index
        $dir = $request->input('dir');
        $searchValue = $request->input('search');
        $query = null;

        if (isset($columns[$column])) {
            $query = Project::orderBy($columns[$column], $dir);
        } else {
            $query = Project::orderBy("id", "asc");
        }

        if ($searchValue) {
            $query->where(function($query) use ($searchValue) {
                $query->where('name', 'like', '%' . $searchValue . '%')
                    ->orWhere('link', 'like', '%' . $searchValue . '%');
            });
        }

        return new ProjectsResource($query->paginate($length));
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return Response
     */
    public function store(ProjectRequest $request)
    {
        $file = $request->file("thumbnail");

        $imageName = str_replace(' ', '', $request->input("name")) .'.'. $file->getClientOriginalExtension();

        $file->move( base_path() . '/public/images/projects/', $imageName );

        $project = new Project;
        $project->name = $request->input("name");
        $project->description = $request->input("description");
        $project->owner = $request->input("owner");
        $project->link = $request->input("link") ?? '';
        $project->icon = $imageName;
        $project->completed = $request->input("complete") ? 1 : 0;

        if ($project->save()) {
            return redirect("/dash/projects")->with("success", "Task Created");
        }

        return redirect("/dash/projects")->with("error", "Task Not Created");
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return Response
     */
    public function destroy($id)
    {
        if (!$id) {
            throw new HttpException(400, "Invalid id");
        }

        $project = Project::findOrFail($id);

        if($project->delete()) {
            return redirect("/dash/projects")->with("success", "Project " . $project->name .  " Removed");
        }
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return Response
     */
    public function edit($id)
    {
        if (!$id) {
            throw new HttpException(400, "Invalid id");
        }

        $project = Project::findOrFail($id);

        return view('forms.edit_project', compact('project'));
    }

    /**
     * Update the given Task.
     *
     * @param  Request  $request
     * @param  string  $id
     * @return Response
     */
    public function update(Request $request, $id)
    {
        if (!$id) {
            throw new HttpException(400, "Invalid id");
        }

        $project = Project::findOrFail($id);

        $file = $request->file("thumbnail");

        $imageName = $request->input("id") .'.'. $file->getClientOriginalExtension();

        $file->move( base_path() . '/public/images/projects/', $imageName );

        $project->name = $request->input("name");
        $project->description = $request->input("description");
        $project->owner = $request->input("owner");
        $project->link = $request->input("link") ?? '';
        $project->icon = $imageName;
        $project->completed = $request->input("complete") ? 1 : 0;
        
        if ($project->save()) {
            return view('forms.edit_project', compact('project'));
        }

        throw new HttpException(400, "Invalid data");
    }

}
