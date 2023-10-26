<?php

namespace App\Models\Data;

use DateTime;
use Spatie\LaravelData\Attributes\DataCollectionOf;
use Spatie\LaravelData\Attributes\Validation;
use Spatie\LaravelData\Data;
use Spatie\LaravelData\DataCollection;
use Spatie\LaravelData\Optional;

class Project extends Data
{
    public const COLLECTION_NAME = 'projects';

    public function __construct(
        public int|Optional $id,
        public string $name,
        public string $description,
        public string $owner,
        public string $link,
        public string $icon,
        public bool $complete,
        public bool $private,
        public DateTime|Optional $created_at,
        public DateTime|Optional $updated_at,
        #[DataCollectionOf(Tag::class)]
        public DataCollection|Optional $tags,
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
