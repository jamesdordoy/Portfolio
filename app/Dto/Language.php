<?php

namespace App\Dto;

use DateTime;
use Spatie\LaravelData\Data;

class Language extends Data
{
    public function __construct(
        public ?int $id,
        public string $name,
        public string $description,
        public ?DateTime $created_at,
        public ?DateTime $updated_at,
    ) {}
}
