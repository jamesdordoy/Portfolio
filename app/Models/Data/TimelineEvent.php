<?php

namespace App\Models\Data;

use DateTime;
use Spatie\LaravelData\Data;
use Spatie\LaravelData\Optional;

class TimelineEvent extends Data
{
    public const COLLECTION_NAME = 'timeline';

    public function __construct(
        public int|Optional $id,
        public DateTime $from,
        public DateTime $to,
        public string $name,
        public string $title,
        public string $icon,
        public string $body,
        public bool $hidden,
        public DateTime|Optional $created_at,
        public DateTime|Optional $updated_at,
    ) {}
}
