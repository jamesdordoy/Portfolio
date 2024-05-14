<?php

namespace App\Dto;

use DateTime;
use Spatie\LaravelData\Attributes\DataCollectionOf;
use Spatie\LaravelData\Attributes\Validation;
use Spatie\LaravelData\Data;
use Spatie\LaravelData\DataCollection;

class Project extends Data
{
    public const COLLECTION_NAME = 'projects';

    public function __construct(
        public ?int $id,
        public string $name,
        public string $description,
        public string $owner,
        public string $link,
        public string $icon,
        public bool $complete,
        public bool $private,
        public ?DateTime $created_at,
        public ?DateTime $updated_at,
        #[DataCollectionOf(Tag::class)]
        public ?DataCollection $tags,
    ) {}

    public static function rules(): array
    {
        return [
            'name' => [
                new Validation\Required(),
                new Validation\StringType(),
                new Validation\Min(3),
            ],
            'description' => [
                new Validation\Required(),
                new Validation\StringType(),
                new Validation\Min(3),
            ],
            'owner' => [
                new Validation\Required(),
                new Validation\StringType(),
            ],
        ];
    }
}
