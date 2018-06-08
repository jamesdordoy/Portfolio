<?php

namespace App\Http\Controllers;

use App\Models\Project;

use App\Models\Language;

use App\Models\Examples\Dependencies;

use Illuminate\Http\Request;

class DashboardController extends Controller
{
    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $projectCompleteCount = Project::where('completed', true)->count();
        $projectIncompleteCount = Project::where('completed', false)->count();

        $languages = Language::count();

        $deps = Dependencies::count();

        return view(
            'home_dash',
            compact(
                'projectCompleteCount',
                'projectIncompleteCount',
                'languages'
            )
        );
    }
}
