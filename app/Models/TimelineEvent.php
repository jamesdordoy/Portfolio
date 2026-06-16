<?php

declare(strict_types=1);

namespace App\Models;

use Database\Factories\TimelineEventFactory;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Support\Carbon;

/**
 * @property int $id
 * @property Carbon $from
 * @property Carbon $to
 * @property string $name
 * @property string $title
 * @property string $icon
 * @property string $body
 * @property bool $hidden
 * @property Carbon $created_at
 * @property Carbon $updated_at
 */
class TimelineEvent extends EloquentModel
{
    /** @use HasFactory<TimelineEventFactory> */
    use HasFactory;

    protected $casts = [
        'from' => 'datetime',
        'to' => 'datetime',
        'created_at' => 'datetime',
        'updated_at' => 'datetime',
    ];
}
