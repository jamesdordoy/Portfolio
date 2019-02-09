<?php

namespace App\Http\Controllers\Front;

use Illuminate\Http\Request;

use App\Models\Project;

use App\Models\Language;
use App\Http\Controllers\Controller;

use App\Contracts\Services\TwitterServiceContract;

class IndexController extends Controller
{
    private $twitter;

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct(TwitterServiceContract $twitter)
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
        $projects = Project::publicProjects()->with("tags")->latest()->get();
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

    /**
     * Show the Home Page
     *
     * @return \Illuminate\Http\Response
     */
    public function privacyPolicy()
    {
        return view('front.privacy-policy');
    }
}
