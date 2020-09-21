<?php

namespace App\Http\Controllers\Back;

use App\Contracts\Services\LanguageServiceContract;
use App\Http\Controllers\Controller;
use App\Http\Resources\LanguageResource;
use App\Models\Language;
use Illuminate\Http\Request;
use JamesDordoy\LaravelVueDatatable\Http\Resources\DataTableCollectionResource;

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
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $limit = $request->input('length');
        $index = $request->input('column');
        $orderBy = $request->input('dir', 'asc');
        $search = $request->input('search');

        return new DataTableCollectionResource(
            Language::eloquentQuery($index, $orderBy, $search)->paginate($limit)
        );
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     *
     * @return \Illuminate\Http\Response
     */
    public function find(Request $request, int $id)
    {
        return Language::with('image')->find($id);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     *
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $image = $request->file('image');
        $payload = $request->only('name', 'description');

        $language = $this->languageService->store($payload, $image);

        if (!is_null($language)) {
            return new LanguageResource($language);
        }

        throw new HttpException(400, 'Invalid data');
    }

    /**
     * Update the specified resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @param int                      $id
     *
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        if (!$id) {
            throw new HttpException(400, 'Invalid id');
        }

        $payload = $request->only('name', 'description');
        $language = $this->languageService->update($id, $payload, $request->image);

        if (!is_null($language)) {
            return new LanguageResource($language);
        }

        throw new HttpException(400, 'Invalid data');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param int $id
     *
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        if (!$id) {
            throw new HttpException(400, 'Invalid id');
        }

        $language = Language::findOrFail($id);

        if ($language->delete()) {
            return redirect('/dash/languages')->with('success', "Language $id Removed");
        }
    }
}
