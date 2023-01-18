<?php

namespace App\Models\Data;

use Spatie\LaravelData\Data;

class Tag extends Data
{
    public function __construct(
        public int $id,
        public string $taggable_id,
        public string $taggable_type,
    ) {
    }
}
