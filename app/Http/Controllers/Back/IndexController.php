<?php

namespace App\Http\Controllers\Back;

use App\Http\Controllers\Controller;
use App\Models\Language;
use App\Models\Project;
use Illuminate\View\View;

class IndexController extends Controller
{
    /**
     * Show the application dashboard.
     *
     * @return View
     */
    public function index(): View
    {
        $languages = Language::count();
        $projectCompleteCount = Project::where('completed', true)->count();
        $projectIncompleteCount = Project::where('completed', false)->count();

        return view(
            'back.home',
            compact(
                'projectCompleteCount',
                'projectIncompleteCount',
                'languages'
            )
        );
    }

    /**
     * Show the application dashboard.
     *
     * @return View
     */
    public function wildcard(): View
    {
        return view('back/home');
    }

    /**
     * Show the application dashboard.
     *
     * @return View
     */
    public function playground(): View
    {
        return view(
            'back.playground.index'
        );
    }
}
