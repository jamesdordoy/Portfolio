<?php

declare(strict_types=1);

namespace App\Models;

use Database\Factories\NewsletterFactory;
use Illuminate\Database\Eloquent\Attributes\UseFactory;
use Illuminate\Database\Eloquent\Factories\HasFactory;

/**
 * @property int                        $id
 * @property string                     $email
 * @property \Illuminate\Support\Carbon $created_at
 * @property \Illuminate\Support\Carbon $updated_at
 */
#[UseFactory(NewsletterFactory::class)]
class Newsletter extends EloquentModel
{
    use HasFactory;

    protected $casts = [
        'created_at' => 'datetime',
        'updated_at' => 'datetime',
    ];
}
