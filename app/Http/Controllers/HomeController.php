<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Route;
use Illuminate\View\View;
use Inertia\Inertia;
use Inertia\Response;
use App\Models\Project;
use App\Models\TimelineEvent;


class HomeController extends Controller
{
    /**
     * Show the Home Page.
     *
     * @return View
     */
    public function index(): Response
    {
        $publicProjects = Project::with("tags")->publicProjects()->get();

        $timeline = TimelineEvent::get();

        return Inertia::render(
            'Home/IndexPage',
            [
                'canLogin' => Route::has('login'),
                'projects' => $publicProjects,
                'timeline' => $timeline,
            ]
        );
    }
}
