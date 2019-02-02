<?php

namespace App\Models;

class Project extends EloquentModel
{
    public function dependencies()
    {
        return $this->hasMany('App\Dependencies');
    }

    public function scopePublicProjects($query)
    {
        return $query->where('private', 0);
    }
}
