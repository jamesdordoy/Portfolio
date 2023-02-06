<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\MorphTo;
use Illuminate\Database\Eloquent\Relations\MorphToMany;

class Tag extends EloquentModel
{
    use HasFactory;

    protected $fillable = [
        'taggable_id',
        'taggable_type',
    ];

    public function taggable(): MorphTo
    {
        return $this->morphTo();
    }
}
