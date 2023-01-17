<?php

namespace App\Models\Data;

use DateTime;
use Spatie\LaravelData\Data;

class TimelineEvent extends Data
{
    public function __construct(
        public int $id,
        public DateTime $from,
        public DateTime $to,
        public string $name,
        public string $title,
        public string $icon,
        public string $body,
        public bool $hidden,
        public DateTime $created_at,
        public DateTime $updated_at,
    ) {
    }
}
