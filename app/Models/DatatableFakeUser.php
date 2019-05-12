<?php

namespace App\Models;
use JamesDordoy\LaravelVueDatatable\Traits\LaravelVueDatatableTrait;

class DatatableFakeUser extends EloquentModel
{
    use LaravelVueDatatableTrait;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name', 'email', 'password',
    ];

    protected $dataTableColumns = [
        'id' => [
            'search' => false,
        ],
        'name' => [
            'search' => true,
        ],
        'email' => [
            'search' => true,
        ],
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token',
    ];
}
