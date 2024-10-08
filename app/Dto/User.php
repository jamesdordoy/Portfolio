<?php

namespace App\Dto;

use DateTime;
use Spatie\LaravelData\Data;
use Spatie\LaravelData\Optional;

class User extends Data
{
    public function __construct(
        public int|Optional $id,
        public string $name,
        public string $email,
        public DateTime|Optional $created_at,
        public DateTime|Optional $updated_at,
    ) {
    }
}
