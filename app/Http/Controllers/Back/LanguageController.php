<?php

namespace App\Http\Controllers\Back;

use App\Models\Language;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

use App\Contracts\Services\LanguageServiceContract;

class LanguageController extends Controller
{
    protected $languageService;

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct(LanguageServiceContract $languageService)
    {
        $this->languageService = $languageService;
        $this->middleware('auth');
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return $this->languageService->all();
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {

        $this->languageService->store();
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
