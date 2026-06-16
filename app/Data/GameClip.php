<?php

namespace App\Data;

use DateTime;
use Spatie\LaravelData\Attributes\WithCast;
use Spatie\LaravelData\Attributes\WithTransformer;
use Spatie\LaravelData\Casts\DateTimeInterfaceCast;
use Spatie\LaravelData\Data;
use Spatie\LaravelData\Transformers\DateTimeInterfaceTransformer;

class GameClip extends Data
{
    public const COLLECTION_NAME = 'gameClips';

    public function __construct(
        //
        public ?int $id,
        //
        public string $url,
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
        //
        public ?Game $game,
    ) {}
}
