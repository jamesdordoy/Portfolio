<?php

namespace App\Dto;

use DateTime;
use Spatie\LaravelData\Attributes\Validation\Email;
use Spatie\LaravelData\Attributes\Validation\Min;
use Spatie\LaravelData\Attributes\Validation\Required;
use Spatie\LaravelData\Attributes\WithCast;
use Spatie\LaravelData\Attributes\WithTransformer;
use Spatie\LaravelData\Casts\DateTimeInterfaceCast;
use Spatie\LaravelData\Data;
use Spatie\LaravelData\Optional;
use Spatie\LaravelData\Transformers\DateTimeInterfaceTransformer;

class Contact extends Data
{
    public function __construct(
        //
        public int|Optional $id,
        //
        #[
            Required,
            Min(3)
        ]
        public string $name,
        //
        #[
            Required,
            Email
        ]
        public string $email,
        //
        #[
            Required,
            Min(3)
        ]
        public string $message,
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
