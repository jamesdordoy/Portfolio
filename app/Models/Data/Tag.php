<?php

namespace App\Models\Data;

use DateTime;
use Spatie\LaravelData\Data;
use Spatie\LaravelData\Optional;

class Tag extends Data
{
    public function __construct(
        public int|Optional $id,
        public string $taggable_id,
        public string $taggable_type,
        public Taggable $taggable,
        public DateTime|Optional $created_at,
        public DateTime|Optional $updated_at,
    ) {
    }

    public static function fromModel(Tag $tag): self
    {
        return new self(
            $tag->id,
            $tag->taggable_id,
            $tag->taggable_type,
            $tag->taggable,
            $tag->created_at,
            $tag->updated_at,
        );
    }
}
