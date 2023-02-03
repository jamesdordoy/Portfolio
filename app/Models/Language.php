<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\MorphOne;
use Illuminate\Database\Eloquent\Relations\MorphToMany;

class Language extends EloquentModel
{
    use HasFactory;

    public function image(): MorphOne
    {
        return $this->morphOne(Asset::class, 'assetable');
    }

    public function tags(): MorphToMany
    {
        return $this->morphToMany(Tag::class, 'taggable');
    }

    public function scopeOrdered($query)
    {
        return $query->orderBy('id', 'ASC');
    }
}
