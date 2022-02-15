<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;

/**
 * Class Newsletter.
 */
class Newsletter extends EloquentModel
{
    use HasFactory;

    /**
     * @var string[]
     */
    protected $dates = array('created_at', 'updated_at');
}
