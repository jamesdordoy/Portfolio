<?php

namespace App\Models\Examples;

use Illuminate\Database\Eloquent\Model;

class CodeExample extends Model
{
    //
    public function codeExamples()
    {
        return $this->belongsToMany('App\Example');
    }
}
