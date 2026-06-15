<?php

namespace App\Dto;

use DateTime;
use Spatie\LaravelData\Attributes\DataCollectionOf;
use Spatie\LaravelData\Attributes\Validation\BooleanType;
use Spatie\LaravelData\Attributes\Validation\Min;
use Spatie\LaravelData\Attributes\Validation\Required;
use Spatie\LaravelData\Attributes\WithCast;
use Spatie\LaravelData\Attributes\WithTransformer;
use Spatie\LaravelData\Casts\DateTimeInterfaceCast;
use Spatie\LaravelData\Data;
use Spatie\LaravelData\DataCollection;
use Spatie\LaravelData\Transformers\DateTimeInterfaceTransformer;

class Project extends Data
{
    public const COLLECTION_NAME = 'projects';

    /**
     * @param Tag[]|null $tags
     */
    public function __construct(
        public ?int $id,

        #[
            Required(),
            Min(3)
        ]
        public string $name,

        #[
            Required,
            Min(3)
        ]
        public string $description,

        #[
            Required,
            Min(3)
        ]
        public string $owner,

        #[
            Required,
            Min(3)
        ]
        public string $link,

        #[
            Required,
            Min(3)
        ]
        public string $icon,

        #[
            BooleanType,
        ]
        public bool $complete,

        #[
            BooleanType,
        ]
        public bool $private,

        #[
            WithCast(DateTimeInterfaceCast::class, format: DATE_ATOM),
            WithTransformer(DateTimeInterfaceTransformer::class, format: DATE_ATOM)
        ]
        public ?DateTime $created_at,

        #[
            WithCast(DateTimeInterfaceCast::class, format: DATE_ATOM),
            WithTransformer(DateTimeInterfaceTransformer::class, format: DATE_ATOM)
        ]
        public ?DateTime $updated_at,

        #[
            DataCollectionOf(Tag::class)
        ]
        public ?DataCollection $tags,
    ) {}
}
