<?php

namespace App\Http\Controllers;

use App\Models\Project;
use App\Models\TimelineEvent;
use Illuminate\Support\Facades\Route;
use Illuminate\View\View;
use Inertia\Inertia;
use Inertia\Response;
use App\Models\DAO\Project as ProjectData;

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
                'timeline' => $timeline,
            ]
        );
    }
}
