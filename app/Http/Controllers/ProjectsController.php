<?php

namespace App\Http\Controllers;

use App\Models\Project;
use Inertia\Inertia;
use Inertia\Response;
use Spatie\QueryBuilder\QueryBuilder;

class ProjectsController extends Controller
{
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
        $projects = QueryBuilder::for(Project::class)
            ->defaultSort('id')
            ->allowedSorts($this->datatableColumns)
            ->paginate()
            ->withQueryString();

        return Inertia::render(
            'Projects/Index',
            [
                'projects' => $projects,
            ]
        );
    }

    public function create(): Response
    {
        return Inertia::render(
            'Projects/Create'
        );
    }
}
