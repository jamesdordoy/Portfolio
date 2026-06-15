<?php

declare(strict_types=1);

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

/**
 * Base Eloquent model — guards the primary key from mass-assignment.
 *
 * @property int $id
 */
class EloquentModel extends Model
{
    protected $guarded = ['id'];
}
