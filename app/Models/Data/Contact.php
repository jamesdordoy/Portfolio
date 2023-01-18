<?php

namespace App\Models\Data;

use DateTime;
use Spatie\LaravelData\Data;
use Spatie\LaravelData\Optional;

class Contact extends Data
{
    public function __construct(
        public int $id,
        public string $name,
        public string $email,
        public string $message,
        public DateTime|Optional $created_at,
        public DateTime|Optional $updated_at,
    ) {
    }
}
