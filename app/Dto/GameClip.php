<?php

namespace App\Dto;

use DateTime;
use Spatie\LaravelData\Data;

class GameClip extends Data
{
    public const COLLECTION_NAME = 'gameClips';

    public function __construct(
        public ?int $id,
        public string $url,
        public ?DateTime $created_at,
        public ?DateTime $updated_at,
        public ?Game $game,
    ) {
    }
}
