<?php

namespace App\Http\Controllers\Back;

use App\Models\Project;

use App\Models\Language;

use App\Models\Examples\Dependencies;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class IndexController extends Controller
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
            'back.home',
            compact(
                'projectCompleteCount',
                'projectIncompleteCount',
                'languages'
            )
        );
    }

    public function playground()
    {
        return view(
            'back.playground.index'
        );
    }
}
