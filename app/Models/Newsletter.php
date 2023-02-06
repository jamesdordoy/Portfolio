<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;

class Newsletter extends EloquentModel
{
    use HasFactory;

    protected $fillable = [
        'email',
    ];

    protected $dates = ['created_at', 'updated_at'];
}
