<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Example extends Model
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
