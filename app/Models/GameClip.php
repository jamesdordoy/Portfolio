<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;

class GameClip extends EloquentModel
{
    use HasFactory;

    protected $fillable = [
        'url',
    ];

    public function game()
    {
        return $this->belongsTo(Game::class);
    }
}
