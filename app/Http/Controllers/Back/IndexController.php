<?php

namespace App\Http\Controllers\Back;

use App\Models\Project;
use App\Models\Language;
use Illuminate\View\View;
use App\Http\Controllers\Controller;

class IndexController extends Controller
{
    /**
     * Show the application dashboard.
     *
     * @return View
     */
    public function index()
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

    public function wildcard()
    {
        return view('back/home');
    }

    /**
     * Show the application dashboard.
     *
     * @return View
     */
    public function playground()
    {
        return view(
            'back.playground.index'
        );
    }
}
