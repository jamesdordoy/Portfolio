<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;

class Contact extends EloquentModel
{
    use HasFactory;

    protected $fillable = [
        'name',
        'email',
        'message',
    ];

    protected $dates = ['created_at', 'updated_at'];
}
