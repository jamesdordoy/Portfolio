<?php

namespace App\Models\Data;

use DateTime;
use Spatie\LaravelData\Data;
use Spatie\LaravelData\Optional;

class GameClip extends Data
{
    public const COLLECTION_NAME = 'gameClips';

    public function __construct(
        public int|Optional $id,
        public string $url,
        public DateTime|Optional $created_at,
        public DateTime|Optional $updated_at,
        public Game|Optional $game,
    ) {
    }
}
