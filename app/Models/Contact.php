<?php

namespace App\Models;

use JamesDordoy\LaravelVueDatatable\Traits\LaravelVueDatatableTrait;

class Contact extends EloquentModel
{
    use LaravelVueDatatableTrait;

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
