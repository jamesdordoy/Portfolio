<?php

namespace App\Http\Controllers;

use App\Models\Language;

use Illuminate\Http\Request;

class LanguageController extends Controller
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

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
     public function index()
     {
         $languages = Language::orderBy('id', 'ASC')->get();
         $id = Language::max('id') + 1;

         return view('tables.languages', compact('languages', 'id'));
     }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $file = $request->file("icon");

        $imageName = str_replace(" ", "", $request->input("name")) .'.'. $file->getClientOriginalExtension();

        $file->move( base_path() . '/public/images/languages/', $imageName );

        $language = new Language;

        $language->name = $request->input("name");
        $language->description = $request->input("description");
        $language->icon = $imageName;

        if ($language->save()) {
            return redirect("/dash/languages")->with("success", "Language Created");
        }

        return redirect("/dash/languages")->with("error", "Language Not Created");
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
        if (!$id) {
            throw new HttpException(400, "Invalid id");
        }
  
        $language = Language::findOrFail($id);
  
        return view('forms.edit_language', compact('language'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        if (!$id) {
            throw new HttpException(400, "Invalid id");
        }
 
        $language = Language::findOrFail($id);
 
        $file = $request->file("thumbnail");
 
        $imageName = $request->input("id") .'.'. $file->getClientOriginalExtension();
 
        $file->move( base_path() . '/public/images/language/', $imageName );
 
        $language->name = $request->input("name");
        $language->description = $request->input("description");
        $language->icon = $imageName;
        
        if ($language->save()) {
            return view('forms.edit_language', compact('language'));
        }
 
        throw new HttpException(400, "Invalid data");
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        if (!$id) {
            throw new HttpException(400, "Invalid id");
        }

        $language = Language::findOrFail($id);

        if($language->delete()) {
            return redirect("/dash/languages")->with("success", "Language $id Removed");
        }
    }
}
