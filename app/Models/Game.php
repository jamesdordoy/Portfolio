<?php

declare(strict_types=1);

namespace App\Models;

use Database\Factories\GameFactory;
use Illuminate\Database\Eloquent\Attributes\UseFactory;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Support\Carbon;

/**
 * @property int $id
 * @property string $name
 * @property string $description
 * @property string $link
 * @property string $icon
 * @property bool $complete
 * @property bool $private
 * @property Carbon $created_at
 * @property Carbon $updated_at
 * @property-read Collection<int, GameClip> $clips
 */
#[UseFactory(GameFactory::class)]
class Game extends EloquentModel
{
    /** @use HasFactory<GameFactory> */
    use HasFactory;

    protected $casts = [
        'created_at' => 'datetime',
        'updated_at' => 'datetime',
    ];

    /** @return HasMany<GameClip, $this> */
    public function clips(): HasMany
    {
        return $this->hasMany(GameClip::class);
    }
}
