<?php

namespace App\Models\Data;

use DateTime;
use Spatie\LaravelData\Data;
use Spatie\LaravelData\Optional;

class Taggable extends Data
{
    public function __construct(
        public int|Optional $id,
        public string $name,
        public string $description,
        public DateTime|Optional $created_at,
        public DateTime|Optional $updated_at,
    ) {
    }

    public static function fromModel(Taggable $tag): self
    {
        return new self(
            $tag->id,
            $tag->name,
            $tag->description,
            $tag->created_at,
            $tag->updated_at,
        );
    }
}
