<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\MorphToMany;

class Language extends EloquentModel
{
    use HasFactory;

    protected $fillable = [
        'name',
        'description',
    ];

    public function tags(): MorphToMany
    {
        return $this->morphToMany(Tag::class, 'taggable');
    }

    public function scopeOrdered($query)
    {
        return $query->orderBy('id', 'ASC');
    }
}
