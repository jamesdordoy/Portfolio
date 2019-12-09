<?php

namespace App\Http\Controllers\Front;

use App\Models\Post;
use App\Models\Project;
use App\Models\Language;
use App\Models\Timeline;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Resources\TimelineResource;
use App\Http\Resources\PostResource;
use App\Contracts\Services\TwitterServiceContract;

class IndexController extends Controller
{
    protected $twitter;

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
        $auth = \Auth::user();
        $timeline = Timeline::get();
        $languages = Language::with('image')->get();
        $projects = Project::get();

        return view(
            'front.home', 
            [
                'auth' => $auth,
                'projects' => $projects, 
                'languages' => $languages,
                'timeline' => $timeline,
            ]
        );
    }

    public function authenticated(Request $request)
    {
        $logggedIn = \Auth::guest() ? false : true;


    }

    public function languages()
    {
        return Language::with('image')->get();
    }

    public function projects()
    {
        return Project::with("tags")->publicProjects()->get();
    }

    public function tweets()
    {

    }

    public function timeline()
    {
        return TimelineResource::collection(Timeline::get());
    }

    public function posts()
    {
        return PostResource::collection(Post::orderBy("created_at", "desc")->limit(6)->get());
    }

    /**
     * Show the Privacy Page
     *
     * @return \Illuminate\Http\Response
     */
    public function privacyPolicy()
    {
        return view('front.privacy-policy');
    }
}
