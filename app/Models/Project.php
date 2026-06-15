<?php

namespace App\Models;

use Database\Factories\ProjectFactory;
use Illuminate\Database\Eloquent\Attributes\Scope;
use Illuminate\Database\Eloquent\Attributes\UseFactory;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\MorphToMany;

#[UseFactory(ProjectFactory::class)]
class Project extends EloquentModel
{
    use HasFactory;

    public const PUBLIC_RELATIONSHIPS = ['tags.taggable'];

    protected $casts = [
        'created_at' => 'datetime',
        'updated_at' => 'datetime',
    ];

    public function tags(): MorphToMany
    {
        return $this->morphToMany(Tag::class, 'taggable');
    }

    #[Scope]
    public function public(Builder $query): Builder
    {
        return $query->where('private', 0)->with('tags')->latest();
    }
}
