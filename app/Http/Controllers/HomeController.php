<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Route;
use Illuminate\View\View;
use Inertia\Inertia;
use Inertia\Response;

class HomeController extends Controller
{
    /**
     * Show the Home Page.
     *
     * @return View
     */
    public function index(): Response
    {
        return Inertia::render(
            'Home/Index',
            [
                'canLogin' => Route::has('login'),
            ]
        );
    }
}
