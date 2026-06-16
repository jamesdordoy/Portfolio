<?php

declare(strict_types=1);

namespace App\Models;

use Database\Factories\TagFactory;
use Illuminate\Database\Eloquent\Attributes\UseFactory;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\MorphTo;
use Illuminate\Support\Carbon;

/**
 * @property int $id
 * @property int $taggable_id
 * @property string $taggable_type
 * @property Carbon $created_at
 * @property Carbon $updated_at
 * @property-read Model $taggable
 */
#[UseFactory(TagFactory::class)]
class Tag extends EloquentModel
{
    /** @use HasFactory<TagFactory> */
    use HasFactory;

    protected $casts = [
        'created_at' => 'datetime',
        'updated_at' => 'datetime',
    ];

    /** @return MorphTo<Model, $this> */
    public function taggable(): MorphTo
    {
        return $this->morphTo();
    }
}
