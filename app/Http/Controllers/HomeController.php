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
    protected string $index = 'Home';

    public function index(): Response
    {
        $publicProjects = Project::with(Project::PUBLIC_RELATIONSHIPS)->public()->get();
        $timeline = TimelineEvent::get();
        $gameClips = GameClip::with('game')->get();

        return Inertia::render(
            $this->index,
            [
                ProjectData::COLLECTION_NAME => ProjectData::collection($publicProjects),
                TimelineEventData::COLLECTION_NAME => TimelineEventData::collection($timeline),
                GameClipData::COLLECTION_NAME => GameClipData::collection($gameClips),
            ]
        );
    }
}
