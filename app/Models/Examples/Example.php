<?php

namespace App\Models\Examples;

use App\Models\EloquentModel;

class Example extends EloquentModel
{
    //
    public function languages()
    {
        return $this->belongsToMany('App\Langauge');
    }

    public function exampleCodes()
    {
        return $this->hasMany('App\ExampleCode');
    }
}
