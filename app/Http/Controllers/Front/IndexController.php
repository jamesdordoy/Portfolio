<?php

namespace App\Http\Controllers\Front;

use App\Http\Controllers\Controller;
use App\Http\Resources\PostResource;
use App\Http\Resources\TimelineResource;
use App\Models\Language;
use App\Models\Post;
use App\Models\Project;
use App\Models\Timeline;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\AnonymousResourceCollection;
use Illuminate\Support\Collection;
use Illuminate\Support\Facades\Auth;
use Illuminate\View\View;

class IndexController extends Controller
{
    /**
     * Show the Home Page.
     *
     * @return View
     */
    public function index()
    {
        $auth = Auth::user();

        return view(
            'front.home',
            [
                'auth' => $auth,
            ]
        );
    }

    /**
     * Get Public Languages.
     *
     * @return Collection
     */
    public function languages()
    {
        return Language::with('image')->get();
    }

    /**
     * Get Public Projects.
     *
     * @return Collection
     */
    public function projects()
    {
        return Project::with('tags')->publicProjects()->get();
    }

    /**
     * Get Public Timeline Posts.
     *
     * @return AnonymousResourceCollection
     */
    public function timeline()
    {
        return TimelineResource::collection(Timeline::get());
    }

    /**
     * Find a Public Post.
     *
     * @param Request $request
     * @param $id
     *
     * @return PostResource
     */
    public function findPost(Request $request, $id)
    {
        $post = Post::findOrFail($id);

        return new PostResource($post);
    }

    /**
     * Get Public Posts.
     *
     * @return AnonymousResourceCollection
     */
    public function posts()
    {
        return PostResource::collection(Post::orderBy('created_at', 'desc')->limit(6)->get());
    }

    /**
     * Show the Privacy Page.
     *
     * @return View
     */
    public function privacyPolicy()
    {
        return view('front.privacy-policy');
    }
}
