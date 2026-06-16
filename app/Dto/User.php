<?php

namespace App\Dto;

use DateTime;
use Spatie\LaravelData\Attributes\WithCast;
use Spatie\LaravelData\Attributes\WithTransformer;
use Spatie\LaravelData\Casts\DateTimeInterfaceCast;
use Spatie\LaravelData\Data;
use Spatie\LaravelData\Optional;
use Spatie\LaravelData\Transformers\DateTimeInterfaceTransformer;

class User extends Data
{
    public function __construct(
        public ?int $id,
        public string $name,
        public string $email,
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
