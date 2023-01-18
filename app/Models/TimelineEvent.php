<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;

/**
 * Class TimelineEvent.
 */
class TimelineEvent extends EloquentModel
{
    use HasFactory;

    /**
     * @var string
     */
    protected $table = 'timeline_events';

    /**
     * @var string[]
     */
    protected $dates = ['from', 'to', 'created_at', 'updated_at'];
}
