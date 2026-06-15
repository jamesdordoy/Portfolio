<?php

namespace App\Dto;

use DateTime;
use Spatie\LaravelData\Data;

class Tag extends Data
{
    public function __construct(
        public ?int $id,
        public string $taggable_id,
        public string $taggable_type,
        public Taggable $taggable,
        public ?DateTime $created_at,
        public ?DateTime $updated_at,
    ) {}
}
