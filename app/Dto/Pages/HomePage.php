<?php

namespace App\Dto\Pages;

use App\Dto\GameClip;
use App\Dto\Project;
use App\Dto\TimelineEvent;
use Spatie\LaravelData\Attributes\DataCollectionOf;
use Spatie\LaravelData\Data;
use Spatie\LaravelData\DataCollection;

class HomePage extends Data
{
    /**
     * @param DataCollection<int, Project> $projects
     * @param DataCollection<int, TimelineEvent> $timeline
     * @param DataCollection<int, GameClip> $gameClips
     */
    public function __construct(
        //
        #[DataCollectionOf(Project::class)]
        public DataCollection $projects,
        //
        #[DataCollectionOf(TimelineEvent::class)]
        public DataCollection $timeline,
        //
        #[DataCollectionOf(GameClip::class)]
        public DataCollection $gameClips,
    ) {}
}
