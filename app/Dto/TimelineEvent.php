<?php

namespace App\Dto;

use DateTime;
use Spatie\LaravelData\Attributes\WithCast;
use Spatie\LaravelData\Attributes\WithTransformer;
use Spatie\LaravelData\Casts\DateTimeInterfaceCast;
use Spatie\LaravelData\Data;
use Spatie\LaravelData\Optional;
use Spatie\LaravelData\Transformers\DateTimeInterfaceTransformer;

class TimelineEvent extends Data
{
    public const COLLECTION_NAME = 'timeline';

    public function __construct(
        //
        public int|Optional $id,
        //
        #[
            WithCast(DateTimeInterfaceCast::class, format: DATE_ATOM),
            WithTransformer(DateTimeInterfaceTransformer::class, format: DATE_ATOM)
        ]
        public DateTime $from,
        //
        #[
            WithCast(DateTimeInterfaceCast::class, format: DATE_ATOM),
            WithTransformer(DateTimeInterfaceTransformer::class, format: DATE_ATOM)
        ]
        public DateTime $to,
        public string $name,
        public string $title,
        public string $icon,
        public string $body,
        public bool $hidden,
        //
        #[
            WithCast(DateTimeInterfaceCast::class, format: DATE_ATOM),
            WithTransformer(DateTimeInterfaceTransformer::class, format: DATE_ATOM)
        ]
        public DateTime|Optional $created_at,
        //
        #[
            WithCast(DateTimeInterfaceCast::class, format: DATE_ATOM),
            WithTransformer(DateTimeInterfaceTransformer::class, format: DATE_ATOM)
        ]
        public DateTime|Optional $updated_at,
    ) {}
}
