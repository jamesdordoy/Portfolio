<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;

/**
 * Contact.
 */
class Contact extends EloquentModel
{
    use HasFactory;

    /**
     * Dates.
     *
     * @var array
     */
    protected $dates = array('created_at', 'updated_at');
}
