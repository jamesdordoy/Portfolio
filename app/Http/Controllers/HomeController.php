<?php

namespace App\Http\Controllers;

use App\Models\Project;
use App\Models\TimelineEvent;
use Inertia\Inertia;
use Inertia\Response;
use App\Models\Data\Project as ProjectData;
use App\Models\Data\TimelineEvent as TimelineEventData;

class HomeController extends Controller
{
    public function index(): Response
    {
        $publicProjects = Project::with('tags')->publicProjects()->get();
        $timeline = TimelineEvent::get();

        return Inertia::render(
            'Home/IndexPage',
            [
                'projects' => ProjectData::collection($publicProjects),
                'timeline' => TimelineEventData::collection($timeline),
            ]
        );
    }
}
