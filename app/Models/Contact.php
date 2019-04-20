<?php

namespace App\Models;

use App\Traits\DatatableTrait;

class Contact extends EloquentModel
{
    use DatatableTrait;

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
