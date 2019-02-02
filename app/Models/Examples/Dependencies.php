<?php

namespace App\Models\Examples;

use App\Models\EloquentModel;

class Dependencies extends EloquentModel
{
    //

    public function projects()
    {
        return $this->belongsToMany('App\Project');
    }
}
