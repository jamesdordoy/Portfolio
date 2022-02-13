<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;

/**
 * Class Timeline
 * @package App\Models
 */
class Timeline extends EloquentModel
{
    use HasFactory;

    /**
     * @var string
     */
    protected $table = 'timeline';
}
