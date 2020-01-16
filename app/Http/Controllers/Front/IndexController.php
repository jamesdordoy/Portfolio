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

    /**
     * Get Public Languages
     *
     * @return \App\Http\Resources\PostResource
     */
    public function languages()
    {
        return Language::with('image')->get();
    }

    /**
     * Get Public Projects
     *
     * @return \App\Http\Resources\PostResource
     */
    public function projects()
    {
        return Project::with("tags")->publicProjects()->get();
    }

    /**
     * Get Public Timeline Posts
     *
     * @return \App\Http\Resources\PostResource
     */
    public function timeline()
    {
        return TimelineResource::collection(Timeline::get());
    }

    /**
     * Find a Public Post
     *
     * @return \App\Http\Resources\PostResource
     */
    public function findPost(Request $request, $id)
    {
        $post = Post::findOrFail($id);

        return new PostResource($post);
    }

    /**
     * Get Public Posts
     *
     * @return \App\Http\Resources\PostResource
     */
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
