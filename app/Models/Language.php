<?php

namespace App\Models;

use JamesDordoy\LaravelVueDatatable\Traits\LaravelVueDatatableTrait;

class Language extends EloquentModel
{
    use LaravelVueDatatableTrait;

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

    public function image()
    {
        return $this->morphOne(Asset::class, 'assetable');
    }
}
