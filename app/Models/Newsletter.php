<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;

/**
 * Class Newsletter
 * @package App\Models
 */
class Newsletter extends EloquentModel
{
    use HasFactory;

    /**
     * @var string[]
     */
    protected $dates = ['created_at', 'updated_at'];
}
