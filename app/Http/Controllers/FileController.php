<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Services\FileManager\FileService;
use App\Services\FileManager\Models\Disk;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Illuminate\View\View;
use Inertia\Inertia;
use Inertia\Response;

class FileController extends Controller
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

    /**
     * Show the Home Page.
     *
     * @return View
     */
    public function create(Request $request)
    {
        $file = $request->file('file');

        $disk = Disk::first();

        $disk->createFile($file);

        // $service = new FileService($disk);

        // $service->write('test.png', $file);

        // dd(get_class($file));
    }
}
