<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Language extends Model
{
    
    public function examples()
    {
        return $this->hasMany('App\Example');
    }
}
