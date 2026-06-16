<?php

declare(strict_types=1);

namespace App\Models;

use Database\Factories\GameClipFactory;
use Illuminate\Database\Eloquent\Attributes\UseFactory;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Support\Carbon;

/**
 * @property int $id
 * @property int $game_id
 * @property string $url
 * @property Carbon $created_at
 * @property Carbon $updated_at
 * @property-read Game                  $game
 */
#[UseFactory(GameClipFactory::class)]
class GameClip extends EloquentModel
{
    /** @use HasFactory<GameClipFactory> */
    use HasFactory;

    public const PUBLIC_RELATIONSHIPS = ['game'];

    protected $casts = [
        'created_at' => 'datetime',
        'updated_at' => 'datetime',
    ];

    /** @return BelongsTo<Game, $this> */
    public function game(): BelongsTo
    {
        return $this->belongsTo(Game::class);
    }
}
