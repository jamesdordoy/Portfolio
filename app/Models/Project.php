<?php

namespace App\Models;

use App\Traits\Taggable;
use JamesDordoy\LaravelVueDatatable\Traits\LaravelVueDatatableTrait;

class Project extends EloquentModel
{
    use Taggable, LaravelVueDatatableTrait;

    protected $dataTableColumns = [
        'id' => [
            'search' => false,
        ],
        'name' => [
            'search' => true,
        ],
        'owner' => [
            'search' => true,
        ],
        'private' => [
            'search' => true,
        ],
        'completed' => [
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
