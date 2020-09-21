<?php

namespace App\Http\Controllers\Back;

use App\Http\Controllers\Controller;
use App\Models\Post;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class PostController extends Controller
{
    /**
     * GET show data.
     *
     * @param Request $request
     *
     * @return Response
     */
    public function index(Request $request)
    {
        return Post::paginate();
    }
}
