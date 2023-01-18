<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Project extends EloquentModel
{
    use HasFactory;

    public function dependencies(): HasMany
    {
        return $this->hasMany('App\Dependencies');
    }

    public function tags()
    {
        return $this->morphToMany(Tag::class, 'taggable');
    }

    /**
     * @param $query
     * @return mixed
     */
    public function scopePublicProjects($query)
    {
        return $query->where('private', 0)->with('tags')->latest();
    }
}
