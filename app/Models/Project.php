<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\MorphToMany;

class Project extends EloquentModel
{
    use HasFactory;

    protected $fillable = [
        'name',
        'description',
        'owner',
        'link',
        'icon',
        'complete',
        'private',
    ];

    public const PUBLIC_RELATIONSHIPS = ['tags.taggable'];

    public function tags(): MorphToMany
    {
        return $this->morphToMany(Tag::class, 'taggable');
    }

    public function scopePublic($query)
    {
        return $query->where('private', 0)->with('tags')->latest();
    }
}
