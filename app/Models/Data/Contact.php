<?php

namespace App\Models\Data;

use DateTime;
use Spatie\LaravelData\Data;

class Contact extends Data
{
    public function __construct(
        public int $id,
        public string $name,
        public string $email,
        public string $message,
        public DateTime $created_at,
        public DateTime $updated_at,
    ) {
    }
}
