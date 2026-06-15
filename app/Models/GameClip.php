<?php

namespace App\Models;

use Database\Factories\GameClipFactory;
use Illuminate\Database\Eloquent\Attributes\UseFactory;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

#[UseFactory(GameClipFactory::class)]
class GameClip extends EloquentModel
{
    use HasFactory;

    public const PUBLIC_RELATIONSHIPS = ['game'];

    protected $casts = [
        'created_at' => 'datetime',
        'updated_at' => 'datetime',
    ];

    public function game(): BelongsTo
    {
        return $this->belongsTo(Game::class);
    }
}
