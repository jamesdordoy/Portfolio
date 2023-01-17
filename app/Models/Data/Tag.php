<?php

namespace App\Models\Data;

use Spatie\LaravelData\Attributes\DataCollectionOf;
use Spatie\LaravelData\Data;
use Spatie\LaravelData\DataCollection;

class Tag extends Data
{
    public function __construct(
        public int $id,
        public string $taggable_id,
        public string $taggable_type,
    ) {
    }
}
