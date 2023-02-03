<?php

namespace App\Models\Data;

use Spatie\LaravelData\Data;

class Taggable extends Data
{
    public function __construct(
        public int $id,
        public string $name,
        public string $description
    ) {
    }

    public static function fromModel(Taggable $tag): self
    {
        return new self(
            $tag->id,
            $tag->name,
            $tag->description
        );
    }
}
