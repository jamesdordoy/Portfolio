<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Models\Project;

use App\Models\Language;

use App\Services\TwitterService;
use App\Interfaces\TwitterInterface;

class HomeController extends Controller
{
    private $twitter;

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct(TwitterInterface $twitter)
    {
        $this->twitter = $twitter;
    }

    /**
     * Show the Home Page
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $languages = Language::get();
        $projects = Project::latest()->get();
        $tweets = $this->twitter->getStatuses();

        $auth = \Auth::user();

        return view(
            'home', 
            [
                'auth' => $auth,
                'projects' => $projects, 
                'tweets' => $tweets,
                'languages' => $languages,
            ]
        );
    }
}
