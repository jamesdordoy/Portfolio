<?php

namespace App\Models\Examples;

use Illuminate\Database\Eloquent\Model;

class Dependencies extends Model
{
    //

    public function projects()
    {
        return $this->belongsToMany('App\Project');
    }
}
