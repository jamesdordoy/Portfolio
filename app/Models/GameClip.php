<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class GameClip extends Model
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
