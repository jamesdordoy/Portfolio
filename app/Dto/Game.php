<?php

namespace App\Dto;

use DateTime;
use Spatie\LaravelData\Attributes\DataCollectionOf;
use Spatie\LaravelData\Data;
use Spatie\LaravelData\DataCollection;

class Game extends Data
{
    public const COLLECTION_NAME = 'games';

    public function __construct(
        public ?int $id,
        public string $name,
        public string $description,
        public string $link,
        public string $icon,
        public bool $complete,
        public bool $private,
        public ?DateTime $created_at,
        public ?DateTime $updated_at,
        #[DataCollectionOf(GameClip::class)]
        public ?DataCollection $clips,
    ) {}
}
