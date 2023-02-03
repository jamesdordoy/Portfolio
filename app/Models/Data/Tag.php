<?php

namespace App\Models\Data;

use Spatie\LaravelData\Data;

class Tag extends Data
{
    public function __construct(
        public int $id,
        public string $taggable_id,
        public string $taggable_type,
        public Taggable $taggable,
    ) {
    }

    public static function fromModel(Tag $tag): self
    {
        return new self(
            $tag->id,
            $tag->taggable_id,
            $tag->taggable_type,
            $tag->taggable
        );
    }
}
