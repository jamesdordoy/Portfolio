<?php

use App\Http\Controllers\HomeController;
use App\Http\Controllers\LanguagesController;
use App\Http\Controllers\ProjectsController;
use App\Http\Controllers\TagsController;
use Illuminate\Foundation\Application;
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

Route::get('/', array(HomeController::class, 'index'))->name('home');

Route::middleware(array('auth:sanctum', 'verified'))->group(function () {
    Route::get('/dashboard', function () {
        return Inertia::render('Dashboard');
    })->name('dashboard');

    Route::get('/tags', array(TagsController::class, 'index'))->name('tags');
    Route::get('/tags/create', array(TagsController::class, 'create'))->name('tags.create');

    Route::get('/languages', array(LanguagesController::class, 'index'))->name('languages');
    Route::get('/languages/create', array(LanguagesController::class, 'create'))->name('languages.create');
    Route::post('/languages/create', array(LanguagesController::class, 'store'))->name('languages.store');
    Route::delete('/languages/{id}', array(LanguagesController::class, 'destroy'))->name('languages.delete');

    Route::get('/projects', array(ProjectsController::class, 'index'))->name('projects');

    Route::get('/posts', function () {
        return Inertia::render('Posts');
    })->name('posts');
});
