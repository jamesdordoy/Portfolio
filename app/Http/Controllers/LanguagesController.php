<?php

namespace App\Http\Controllers;

use App\Actions\Languages\CreateLanguage;
use App\Actions\Languages\DeleteLanguage;
use App\Models\Language;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;
use Laravel\Jetstream\RedirectsActions;
use Spatie\QueryBuilder\QueryBuilder;
use App\Models\Data\Language as LanguageData;

class LanguagesController extends Controller
{
    use RedirectsActions;

    protected array $datatableColumns = [
        'id' => 'id',
        'name' => 'name',
        'description' => 'description',
    ];

    protected array $datatableSearchRows = [
        'name' => 'name',
    ];

    public function index(): Response
    {
        $languages = QueryBuilder::for(Language::class)
            ->defaultSort('id')
            ->allowedSorts($this->datatableColumns)
            ->paginate()
            ->withQueryString();

        return Inertia::render(
            'Languages/Index',
            [
                'languages' => $languages,
            ]
        );
    }

    public function create(): Response
    {
        return Inertia::render(
            'Languages/Create'
        );
    }

    public function store(Request $request)
    {
        $data = LanguageData::from($request->only('name', 'description'));

        $creator = app(CreateLanguage::class);

        $language = $creator->create($data);

        return $this->redirectPath($creator);
    }

    public function destroy(Request $request, $id)
    {
        $language = Language::findOrFail($id);

        $creator = app(DeleteLanguage::class);

        $language = $creator->delete($language);

        return $this->redirectPath($creator);
    }
}
