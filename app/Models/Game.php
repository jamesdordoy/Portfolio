<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;

class Game extends EloquentModel
{
    use HasFactory;

    protected $fillable = [
        'name',
        'description',
        'link',
        'icon',
        'complete',
        'private',
    ];

    public function clips()
    {
        return $this->hasMany(GameClip::class);
    }
}
