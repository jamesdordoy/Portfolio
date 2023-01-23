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
    protected string $index = 'Home/IndexPage';

    public function index(): Response
    {
        $publicProjects = Project::with(Project::PUBLIC_RELATIONSHIPS)->publicProjects()->get();
        $timeline = TimelineEvent::get();

        return Inertia::render(
            $this->index,
            [
                ProjectData::COLLECTION_NAME => ProjectData::collection($publicProjects),
                TimelineEventData::COLLECTION_NAME => TimelineEventData::collection($timeline),
            ]
        );
    }
}
