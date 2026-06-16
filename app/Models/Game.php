<?php

declare(strict_types=1);

namespace App\Models;

use Database\Factories\GameFactory;
use Illuminate\Database\Eloquent\Attributes\UseFactory;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\HasMany;

/**
 * @property int                                                          $id
 * @property string                                                       $name
 * @property string                                                       $description
 * @property string                                                       $link
 * @property string                                                       $icon
 * @property bool                                                         $complete
 * @property bool                                                         $private
 * @property \Illuminate\Support\Carbon                                   $created_at
 * @property \Illuminate\Support\Carbon                                   $updated_at
 * @property-read \Illuminate\Database\Eloquent\Collection<int, GameClip> $clips
 */
#[UseFactory(GameFactory::class)]
class Game extends EloquentModel
{
    /** @use HasFactory<\Database\Factories\GameFactory> */
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
