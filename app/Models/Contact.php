<?php

declare(strict_types=1);

namespace App\Models;

use Database\Factories\ContactFactory;
use Illuminate\Database\Eloquent\Attributes\UseFactory;
use Illuminate\Database\Eloquent\Factories\HasFactory;

/**
 * @property int                             $id
 * @property string                          $name
 * @property string                          $email
 * @property string                          $message
 * @property \Illuminate\Support\Carbon      $created_at
 * @property \Illuminate\Support\Carbon      $updated_at
 */
#[UseFactory(ContactFactory::class)]
class Contact extends EloquentModel
{
    /** @use HasFactory<\Database\Factories\ContactFactory> */
    use HasFactory;

    protected $casts = [
        'created_at' => 'datetime',
        'updated_at' => 'datetime',
    ];
}
