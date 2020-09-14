<?php

namespace App\Models;

use App\Traits\Taggable;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use JamesDordoy\LaravelVueDatatable\Traits\LaravelVueDatatableTrait;

class Project extends EloquentModel
{
    use HasFactory, Taggable, LaravelVueDatatableTrait;

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

    protected $dataTableRelationships = [
        "belongsTo" => [
            //
        ],
        "hasOne" => [
            //
        ],
        "hasMany" => [
            //
        ],
        "belongsToMany" => [
            //
        ],
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
