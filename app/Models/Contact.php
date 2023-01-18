<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;

class Contact extends EloquentModel
{
    use HasFactory;

    /**
     * Dates.
     *
     * @var array
     */
    protected $dates = ['created_at', 'updated_at'];
}
