<?php

namespace App\Http\Controllers\Back;

use App\Models\Project;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

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
        $this->middleware('auth');
    }

    public function index()
    {
        $projects = Project::orderBy('id', 'ASC')->get();
        $id = Project::max('id') + 1;

        return view('back.tables.projects', [
            'projects' => $projects,
        ]);
    }

    public function store(ProjectRequest $request)
    {
        $file = $request->file("thumbnail");

        $imageName =  str_replace(' ', '', $request->input("name")) .'.'. $file->getClientOriginalExtension();

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
