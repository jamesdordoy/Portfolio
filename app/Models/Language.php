<?php

namespace App\Models;

class Language extends EloquentModel
{
    public function examples()
    {
        return $this->hasMany('App\Example');
    }
}
