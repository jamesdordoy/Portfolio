<?php

namespace App\Http\Controllers\Front;

use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\View\View;

class IndexController extends Controller
{
    /**
     * Show the Home Page.
     *
     * @return View
     */
    public function index(): View
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
     * Show the Privacy Page.
     *
     * @return View
     */
    public function privacyPolicy(): View
    {
        return view('front.privacy-policy');
    }
}
