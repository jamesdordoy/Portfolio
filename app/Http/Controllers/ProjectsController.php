<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\View\View;
use Inertia\Inertia;
use Inertia\Response;
use App\Models\Project;
use ProtoneMedia\LaravelQueryBuilderInertiaJs\InertiaTable;
use Spatie\QueryBuilder\QueryBuilder;

/**
 * Class ProjectsController
 * @package App\Http\Controllers
 */
class ProjectsController extends Controller
{
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
        $projects = QueryBuilder::for(Project::class)
            ->defaultSort('id')
            ->allowedSorts($this->datatableColumns)
            ->paginate()
            ->withQueryString();

        $callback = fn (InertiaTable $table) =>
            $table->addSearchRows($this->datatableSearchRows)
                ->addColumns($this->datatableColumns);

        return Inertia::render(
            'Projects/Index',
            [
                'projects' => $projects,
            ]
        )->table($callback);
    }

    /**
     * @return Response
     */
    public function create(): Response
    {
        return Inertia::render(
            'Projects/Create'
        );
    }
}
