<?php

namespace App\Http\Controllers;

use App\Models\Project;
use App\Models\TimelineEvent;
use Inertia\Inertia;
use Inertia\Response;
use App\Models\Data\Project as ProjectData;
use App\Models\Data\TimelineEvent as TimelineEventData;
use App\Models\GameClip;
use App\Models\Data\GameClip as GameClipData;

class HomeController extends Controller
{
    protected string $index = 'HomePage';

    public function index(): Response
    {
        return Inertia::render(
            $this->index,
            [
                ProjectData::COLLECTION_NAME => fn() => ProjectData::collection(
                    Project::with(Project::PUBLIC_RELATIONSHIPS)->public()->get()
                ),
                TimelineEventData::COLLECTION_NAME => fn() => TimelineEventData::collection(
                    TimelineEvent::get()
                ),
                GameClipData::COLLECTION_NAME => fn() => GameClipData::collection(
                    GameClip::with(GameClip::PUBLIC_RELATIONSHIPS)->get()
                ),
            ]
        );
    }
}
