<?php

namespace App\Http\Controllers;

use App\Data\GameClip as GameClipData;
use App\Data\Pages\HomePage;
use App\Data\Project as ProjectData;
use App\Data\TimelineEvent as TimelineEventData;
use App\Models\GameClip;
use App\Models\Project;
use App\Models\TimelineEvent;
use Inertia\Inertia;
use Inertia\Response;

final class HomeController
{
    public const INDEX = 'HomePage';

    public function index(): Response
    {
        return Inertia::render(
            self::INDEX,
            [
                'homePage' => HomePage::from([
                    'projects' => ProjectData::collect(
                        Project::with(Project::PUBLIC_RELATIONSHIPS)->visible()->get()
                    ),
                    'timeline' => TimelineEventData::collect(
                        TimelineEvent::get()
                    ),
                    'gameClips' => GameClipData::collect(
                        GameClip::with(GameClip::PUBLIC_RELATIONSHIPS)->get()
                    ),
                ]),
            ]
        );
    }
}
