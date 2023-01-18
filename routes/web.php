<?php

use App\Http\Controllers\HomeController;
use App\Http\Controllers\LanguagesController;
use App\Http\Controllers\ProjectsController;
use App\Http\Controllers\TagsController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', [HomeController::class, 'index'])->name('home');

Route::middleware(['auth:sanctum', 'verified'])->group(function () {
    Route::get('/dashboard', function () {
        return Inertia::render('Dashboard');
    })->name('dashboard');

    Route::get('/tags', [TagsController::class, 'index'])->name('tags');
    Route::get('/tags/create', [TagsController::class, 'create'])->name('tags.create');

    Route::get('/languages', [LanguagesController::class, 'index'])->name('languages');
    Route::get('/languages/create', [LanguagesController::class, 'create'])->name('languages.create');
    Route::post('/languages/create', [LanguagesController::class, 'store'])->name('languages.store');
    Route::delete('/languages/{id}', [LanguagesController::class, 'destroy'])->name('languages.delete');

    Route::get('/projects', [ProjectsController::class, 'index'])->name('projects');

    Route::get('/posts', function () {
        return Inertia::render('Posts');
    })->name('posts');
});
