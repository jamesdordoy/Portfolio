<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Project extends Model
{
    //

    public function dependencies()
    {
        return $this->hasMany('App\Dependencies');
    }
}
