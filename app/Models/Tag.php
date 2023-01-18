<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\MorphTo;
use Illuminate\Database\Eloquent\Relations\MorphToMany;

class Tag extends EloquentModel
{
    use HasFactory;

    public function taggable(): MorphTo
    {
        return $this->morphTo();
    }

    public function projects(): MorphToMany
    {
        return $this->morphedByMany(Project::class, 'taggables');
    }

    public function languages(): MorphToMany
    {
        return $this->morphedByMany(Language::class, 'taggables');
    }
}
