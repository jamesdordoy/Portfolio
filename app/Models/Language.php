<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Language extends Model
{
    public function examples()
    {
        return $this->hasMany('App\Example');
    }
}
