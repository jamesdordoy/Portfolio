<?php

namespace App\Models\Examples;

use App\Models\EloquentModel;

class CodeExample extends EloquentModel
{
    //
    public function codeExamples()
    {
        return $this->belongsToMany('App\Example');
    }
}
