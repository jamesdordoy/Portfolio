<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use JamesDordoy\LaravelVueDatatable\Traits\LaravelVueDatatableTrait;

class Language extends EloquentModel
{
    use HasFactory;
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
        ],
    ];

    public function examples()
    {
        return $this->hasMany('App\Example');
    }

    public function image()
    {
        return $this->morphOne(Asset::class, 'assetable');
    }

    public function scopeOrdered($query)
    {
        return $query->orderBy('id', 'ASC');
    }
}
