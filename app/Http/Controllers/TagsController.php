<?php

namespace App\Http\Controllers;

use App\Models\Tag;
use Inertia\Inertia;
use Inertia\Response;
use Spatie\QueryBuilder\QueryBuilder;

class TagsController extends Controller
{
    protected array $datatableColumns = [
        'id' => 'id',
        'name' => 'name',
    ];

    protected array $datatableSearchRows = [
        'name' => 'name',
    ];

    public function index(): Response
    {
        $tags = QueryBuilder::for(Tag::with('taggable'))
            ->defaultSort('id')
            ->allowedSorts($this->datatableColumns)
            ->allowedIncludes(['taggable'])
            ->paginate()
            ->withQueryString();

        return Inertia::render(
            'Tags/Index',
            [
                'tags' => $tags,
            ]
        );
    }

    public function create(): Response
    {
        return Inertia::render(
            'Tags/Create'
        );
    }
}
