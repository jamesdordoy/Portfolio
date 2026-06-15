<?php

namespace App\Dto;

use DateTime;
use Spatie\LaravelData\Attributes\DataCollectionOf;
use Spatie\LaravelData\Attributes\WithCast;
use Spatie\LaravelData\Attributes\WithTransformer;
use Spatie\LaravelData\Casts\DateTimeInterfaceCast;
use Spatie\LaravelData\Data;
use Spatie\LaravelData\DataCollection;
use Spatie\LaravelData\Transformers\DateTimeInterfaceTransformer;

class Game extends Data
{
    public const COLLECTION_NAME = 'games';

    /**
     * @param GameClip[]|null $clips
     */
    public function __construct(
        public ?int $id,
        public string $name,
        public string $description,
        public string $link,
        public string $icon,
        public bool $complete,
        public bool $private,
        //
        #[
            WithCast(DateTimeInterfaceCast::class, format: DATE_ATOM),
            WithTransformer(DateTimeInterfaceTransformer::class, format: DATE_ATOM)
        ]
        public ?DateTime $created_at,
        //
        #[
            WithCast(DateTimeInterfaceCast::class, format: DATE_ATOM),
            WithTransformer(DateTimeInterfaceTransformer::class, format: DATE_ATOM)
        ]
        public ?DateTime $updated_at,
        #[DataCollectionOf(GameClip::class)]
        public ?DataCollection $clips,
    ) {}
}
