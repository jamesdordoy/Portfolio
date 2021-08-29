<?php

namespace App\Http\Controllers\Front;

use App\Http\Controllers\Controller;
use App\Http\Resources\Languages\LanguagesResource;
use App\Http\Resources\Posts\PostResource;
use App\Http\Resources\Projects\ProjectsResource;
use App\Http\Resources\Timeline\TimelineResource;
use App\Models\Language;
use App\Models\Post;
use App\Models\Project;
use App\Models\Timeline;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\AnonymousResourceCollection;
use Illuminate\Support\Collection;

class APIController extends Controller
{
    /**
     * Get Public Languages.
     *
     * @return Collection
     */
    public function languages(): LanguagesResource
    {
        $languages = Language::with('image')->get();

        return new LanguagesResource($languages);
    }

    /**
     * Get Public Projects.
     *
     * @return Collection
     */
    public function projects(): ProjectsResource
    {
        $publicProjects = Project::with('tags')->publicProjects()->get();

        return new ProjectsResource($publicProjects);
    }

    /**
     * Get Public Timeline Posts.
     *
     * @return AnonymousResourceCollection
     */
    public function timeline(): AnonymousResourceCollection
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
    public function findPost(Request $request, $id): PostResource
    {
        $post = Post::findOrFail($id);

        return new PostResource($post);
    }

    /**
     * Get Public Posts.
     *
     * @return AnonymousResourceCollection
     */
    public function posts(): AnonymousResourceCollection
    {
        return PostResource::collection(Post::orderBy('created_at', 'desc')->limit(6)->get());
    }
}
