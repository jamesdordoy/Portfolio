<?php

namespace App\Http\Controllers;

use App\Dto\GameClip as GameClipData;
use App\Dto\Pages\HomePage;
use App\Dto\Project as ProjectData;
use App\Dto\TimelineEvent as TimelineEventData;
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
            new HomePage(
                projects: ProjectData::collection(
                    Project::with(Project::PUBLIC_RELATIONSHIPS)->public()->get()
                ),
                timeline: TimelineEventData::collection(
                    TimelineEvent::get()
                ),
                gameClips: GameClipData::collection(
                    GameClip::with(GameClip::PUBLIC_RELATIONSHIPS)->get()
                ),
            )
        );
    }
}
