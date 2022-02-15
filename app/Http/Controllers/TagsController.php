<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\View\View;
use Inertia\Inertia;
use Inertia\Response;
use App\Models\Tag;
use ProtoneMedia\LaravelQueryBuilderInertiaJs\InertiaTable;
use Spatie\QueryBuilder\QueryBuilder;

/**
 * Class TagsController
 * @package App\Http\Controllers
 */
class TagsController extends Controller
{

    /**
     * @var array|string[]
     */
    protected array $datatableColumns = [
        'id' => 'id',
        'name' => 'name',
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
        $tags = QueryBuilder::for(Tag::with('taggable'))
            ->defaultSort('id')
            ->allowedSorts($this->datatableColumns)
            ->allowedIncludes(['taggable'])
            ->paginate()
            ->withQueryString();

        $callback = fn (InertiaTable $table) =>
            $table->addSearchRows($this->datatableSearchRows)
            ->addColumns($this->datatableColumns);

        return Inertia::render(
            'Tags/Index',
            [
                'tags' => $tags,
            ]
        )->table($callback);
    }

    /**
     * @return Response
     */
    public function create(): Response
    {
        return Inertia::render(
            'Tags/Create'
        );
    }
}
