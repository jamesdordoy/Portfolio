<?php

namespace App\Models\Data;

use DateTime;
use Spatie\LaravelData\Attributes\DataCollectionOf;
use Spatie\LaravelData\Attributes\Validation\Required;
use Spatie\LaravelData\Attributes\Validation\StringType;
use Spatie\LaravelData\Data;
use Spatie\LaravelData\DataCollection;
use Spatie\LaravelData\Optional;

class Project extends Data
{
    public const COLLECTION_NAME = 'projects';

    public function __construct(
        public int $id,
        public string $name,
        public string $description,
        public string $owner,
        public string $link,
        public string $icon,
        public bool $completed,
        public bool $private,
        public DateTime $created_at,
        public DateTime $updated_at,
        #[DataCollectionOf(Tag::class)]
        public DataCollection|Optional $tags,
    ) {
    }

    public static function rules(): array
    {
        return [
            'name' => [new Required(), new StringType()],
            'description' => [new Required(), new StringType()],
        ];
    }
}
