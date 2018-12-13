<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Project extends Model
{
    public function dependencies()
    {
        return $this->hasMany('App\Dependencies');
    }

    public function scopePublicProjects($query)
    {
        return $query->where('private', 1);
    }
}
