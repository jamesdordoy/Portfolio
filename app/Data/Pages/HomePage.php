<?php

namespace App\Data\Pages;

use App\Data\GameClip;
use App\Data\Project;
use App\Data\TimelineEvent;
use Spatie\LaravelData\Attributes\DataCollectionOf;
use Spatie\LaravelData\Data;
use Spatie\LaravelData\DataCollection;

class HomePage extends Data
{
    /**
     * @param  DataCollection<int, Project>  $projects
     * @param  DataCollection<int, TimelineEvent>  $timeline
     * @param  DataCollection<int, GameClip>  $gameClips
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
