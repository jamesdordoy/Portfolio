<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;

class TimelineEvent extends EloquentModel
{
    use HasFactory;

    protected $table = 'timeline_events';

    protected $dates = ['from', 'to', 'created_at', 'updated_at'];
}
