<?php

namespace App\Models;

use App\Traits\Taggable;

class Project extends EloquentModel
{
    use Taggable;

    public function dependencies()
    {
        return $this->hasMany('App\Dependencies');
    }

    public function scopePublicProjects($query)
    {
        return $query->where('private', 0)->with("tags")->latest();
    }
}
