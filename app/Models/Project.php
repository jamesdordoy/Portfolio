<?php

namespace App\Models;

use App\Traits\Taggable;
use App\Traits\DatatableTrait;

class Project extends EloquentModel
{
    use Taggable, DatatableTrait;

    protected $dataTableColumns = [
        'id' => [
            'search' => false,
        ],
        'name' => [
            'search' => true,
        ],
        'link' => [
            'search' => true,
        ]
    ];

    public function dependencies()
    {
        return $this->hasMany('App\Dependencies');
    }

    public function scopePublicProjects($query)
    {
        return $query->where('private', 0)->with("tags")->latest();
    }
}
