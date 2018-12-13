<?php

namespace App\Http\Controllers\Front;

use Illuminate\Http\Request;

use App\Models\Project;

use App\Models\Language;
use App\Http\Controllers\Controller;

use App\Services\TwitterService;
use App\Interfaces\TwitterInterface;

class IndexController extends Controller
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
        $contents = \Storage::get('about.json');
        $about = json_decode($contents, 1);

        $languages = Language::get();
        $projects = Project::publicProjects()->latest()->get();
        $tweets = $this->twitter->getStatuses();

        $auth = \Auth::user();

        return view(
            'front.home', 
            [
                'auth' => $auth,
                'projects' => $projects, 
                'tweets' => $tweets,
                'languages' => $languages,
                'about' => $about
            ]
        );
    }
}
