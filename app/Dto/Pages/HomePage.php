<?php

namespace App\Dto\Pages;

use App\Dto\GameClip;
use App\Dto\Project;
use App\Dto\TimelineEvent;
use DateTime;
use Spatie\LaravelData\Attributes\DataCollectionOf;
use Spatie\LaravelData\Data;
use Spatie\LaravelData\DataCollection;

class HomePage extends Data
{
    public function __construct(
        #[DataCollectionOf(Project::class)]
        public DataCollection $projects,
        #[DataCollectionOf(TimelineEvent::class)]
        public DataCollection $timeline,
        #[DataCollectionOf(GameClip::class)]
        public DataCollection $gameClips,
        public ?array $errors = [],
    ) {}
}
