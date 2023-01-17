<?php

namespace App\Models;

use App\Traits\HasTags;
use App\Contracts\Traits\Taggable;
use Illuminate\Database\Eloquent\Factories\HasFactory;

/**
 * Class Project.
 */
class Project extends EloquentModel implements Taggable
{
    use HasFactory;
    use HasTags;

    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function dependencies()
    {
        return $this->hasMany('App\Dependencies');
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
