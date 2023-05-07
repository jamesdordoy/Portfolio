<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;

class GameClip extends EloquentModel
{
    use HasFactory;

    public const PUBLIC_RELATIONSHIPS = ['game'];

    protected $fillable = [
        'url',
    ];

    public function game()
    {
        return $this->belongsTo(Game::class);
    }
}
