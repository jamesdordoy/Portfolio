<?php

declare(strict_types=1);

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;

/**
 * @property int                        $id
 * @property \Illuminate\Support\Carbon $from
 * @property \Illuminate\Support\Carbon $to
 * @property string                     $name
 * @property string                     $title
 * @property string                     $icon
 * @property string                     $body
 * @property bool                       $hidden
 * @property \Illuminate\Support\Carbon $created_at
 * @property \Illuminate\Support\Carbon $updated_at
 */
class TimelineEvent extends EloquentModel
{
    /** @use HasFactory<\Database\Factories\TimelineEventFactory> */
    use HasFactory;

    protected $casts = [
        'from' => 'datetime',
        'to' => 'datetime',
        'created_at' => 'datetime',
        'updated_at' => 'datetime',
    ];
}
