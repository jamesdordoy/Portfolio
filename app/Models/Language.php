<?php

namespace App\Models;

use App\Traits\DatatableTrait;

class Language extends EloquentModel
{
    use DatatableTrait;

    protected $dataTableColumns = [
        'id' => [
            'search' => false,
        ],
        'name' => [
            'search' => true,
        ],
        'description' => [
            'search' => true,
        ]
    ];

    public function examples()
    {
        return $this->hasMany('App\Example');
    }
}
