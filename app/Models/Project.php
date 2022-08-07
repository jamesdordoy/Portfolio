<?php

namespace App\Models;

use App\Traits\Taggable;
use Illuminate\Database\Eloquent\Factories\HasFactory;

/**
 * Class Project.
 */
class Project extends EloquentModel
{
    use HasFactory;
    use Taggable;

    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function dependencies()
    {
        return $this->hasMany('App\Dependencies');
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\MorphToMany
     */
    public function tags()
    {
        return $this->morphToMany(Tag::class, 'taggable');
    }

    /**
     * @param $query
     *
     * @return mixed
     */
    public function scopePublicProjects($query)
    {
        return $query->where('private', 0)->with('tags')->latest();
    }
}
