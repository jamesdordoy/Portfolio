<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use JamesDordoy\LaravelVueDatatable\Traits\LaravelVueDatatableTrait;

class Contact extends EloquentModel
{
    use HasFactory, LaravelVueDatatableTrait;

    protected $dataTableColumns = [
        'id' => [
            'search' => false,
        ],
        'name' => [
            'search' => true,
        ],
        'email' => [
            'search' => true,
        ]
    ];

    protected $dates = ['created_at', 'updated_at'];
}
