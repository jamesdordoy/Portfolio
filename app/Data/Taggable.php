<?php

namespace App\Data;

use DateTime;
use Spatie\LaravelData\Data;
use Spatie\LaravelData\Optional;

class Taggable extends Data
{
    public function __construct(
        public ?int $id,
        public string $name,
        public string $description,
        public DateTime|Optional $created_at,
        public DateTime|Optional $updated_at,
    ) {}
}
