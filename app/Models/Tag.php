<?php

declare(strict_types=1);

namespace App\Models;

use Database\Factories\TagFactory;
use Illuminate\Database\Eloquent\Attributes\UseFactory;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\MorphTo;

/**
 * @property int                                   $id
 * @property int                                   $taggable_id
 * @property string                                $taggable_type
 * @property \Illuminate\Support\Carbon            $created_at
 * @property \Illuminate\Support\Carbon            $updated_at
 * @property-read \Illuminate\Database\Eloquent\Model $taggable
 */
#[UseFactory(TagFactory::class)]
class Tag extends EloquentModel
{
    use HasFactory;

    protected $casts = [
        'created_at' => 'datetime',
        'updated_at' => 'datetime',
    ];

    /** @return MorphTo<\Illuminate\Database\Eloquent\Model, $this> */
    public function taggable(): MorphTo
    {
        return $this->morphTo();
    }
}
