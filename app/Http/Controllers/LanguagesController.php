<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\View\View;
use Inertia\Inertia;
use Inertia\Response;
use App\Models\Language;
use ProtoneMedia\LaravelQueryBuilderInertiaJs\InertiaTable;
use Spatie\QueryBuilder\QueryBuilder;
use Illuminate\Http\Request;
use App\Actions\Languages\CreateLanguage;
use App\Actions\Languages\DeleteLanguage;
use App\Http\Requests\Languages\CreateLanguageRequest;
use Laravel\Jetstream\RedirectsActions;

/**
 * Class LanguagesController
 * @package App\Http\Controllers
 */
class LanguagesController extends Controller
{
    use RedirectsActions;

    /**
     * @var array|string[]
     */
    protected array $datatableColumns = [
        'id' => 'id',
        'name' => 'name',
        'description' => 'description',
    ];

    /**
     * @var array|string[]
     */
    protected array $datatableSearchRows = [
        'name' => 'name',
    ];

    /**
     * Show the Tags Page.
     *
     * @return View
     */
    public function index(): Response
    {
        $languages = QueryBuilder::for(Language::class)
            ->defaultSort('id')
            ->allowedSorts($this->datatableColumns)
            ->paginate()
            ->withQueryString();

        $callback = fn (InertiaTable $table) =>
            $table->addSearchRows($this->datatableSearchRows)
                ->addColumns($this->datatableColumns);

        return Inertia::render(
            'Languages/Index',
            [
                'languages' => $languages,
            ]
        )->table($callback);
    }

    /**
     * @return Response
     */
    public function create(): Response
    {
        return Inertia::render(
            'Languages/Create'
        );
    }

    /**
     * @param CreateLanguageRequest $request
     * @return \Illuminate\Http\Response
     */
    public function store(CreateLanguageRequest $request)
    {
        $data = $request->only('name', 'description');

        $creator = app(CreateLanguage::class);

        $language = $creator->create($data);

        return $this->redirectPath($creator);
    }

    /**
     * @param Request $request
     * @param $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(Request $request, $id)
    {
        $language = Language::findOrFail($id);

        $creator = app(DeleteLanguage::class);

        $language = $creator->delete($language);

        return $this->redirectPath($creator);

    }
}