<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\MorphToMany;

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

    public function scopePublic(Builder $query): Builder
    {
        return $query->where('private', 0)->with('tags')->latest();
    }
}
