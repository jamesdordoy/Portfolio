<?php

namespace App\Models\Data;

use Spatie\LaravelData\Data;

class User extends Data
{
    public function __construct(
        public int $id,
        public string $name,
        public string $email
    ) {
    }
}