<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;

class TimelineEvent extends EloquentModel
{
    use HasFactory;

    protected $table = 'timeline_events';

    protected $fillable = [
        'from',
        'to',
        'name',
        'title',
        'icon',
        'body',
        'hidden',
    ];

    protected $casts = [
        'from' => 'datetime',
        'to' => 'datetime',
        'created_at' => 'datetime',
        'updated_at' => 'datetime',
    ];
}
