<?php

namespace App\Models\Data;

use DateTime;
use Spatie\LaravelData\Data;
use Spatie\LaravelData\Optional;
use Spatie\LaravelData\Attributes\DataCollectionOf;
use Spatie\LaravelData\DataCollection;

class Game extends Data
{
    public const COLLECTION_NAME = 'games';

    public function __construct(
        public int|Optional $id,
        public string $name,
        public string $description,
        public string $link,
        public string $icon,
        public bool $complete,
        public bool $private,
        public DateTime|Optional $created_at,
        public DateTime|Optional $updated_at,
        #[DataCollectionOf(GameClip::class)]
        public DataCollection|Optional $clips,
    ) {}
}
