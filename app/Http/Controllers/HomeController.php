<?php

namespace App\Http\Controllers;

use App\Models\Data\GameClip as GameClipData;
use App\Models\Data\Project as ProjectData;
use App\Models\Data\TimelineEvent as TimelineEventData;
use App\Models\GameClip;
use App\Models\Project;
use App\Models\TimelineEvent;
use Inertia\Inertia;
use Inertia\Response;

final class HomeController extends Controller
{
    public const INDEX = 'HomePage';

    public function index(): Response
    {
        return Inertia::render(
            self::INDEX,
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
