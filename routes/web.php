<?php

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

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Auth\LoginController;
use App\Http\Controllers\Back\PostController;
use App\Http\Controllers\Back\GitHubController;
use App\Http\Controllers\Back\LanguageController;
use App\Http\Controllers\Back\ProjectController;
use App\Http\Controllers\Back\IndexController as BackIndexController;
use App\Http\Controllers\Back\ContactController as BackContactController;
use App\Http\Controllers\ContactController as FrontContactController;
use App\Http\Controllers\Front\IndexController as FrontIndexController;

// Auth Routes
Route::post(
    '/login',
    [LoginController::class, 'login']
)->name('post.login');

Route::post(
    '/logout',
    [LoginController::class, 'logout']
)->name('post.logout');

// Mail Routes
Route::post(
    '/contact',
    [FrontContactController::class, 'store']
)->name('post.contact');

Route::post(
    '/newsletter',
    [FrontContactController::class, 'newsletter']
)->name('post.newsletter');

Route::get(
    '/unsubscribe/{newsletter}',
    [FrontContactController::class, 'newsletterUnsubscribe']
)->middleware('signed')->name('get.newsletter.unsubscribe');

//Frontend
Route::namespace('Front')->group(function () {

    Route::get(
        '/',
        [FrontIndexController::class, 'index']
    )->name('get.front.index');

    Route::get(
        '/languages',
        [FrontIndexController::class, 'languages']
    )->name('get.front.languages');

    Route::get(
        '/projects',
        [FrontIndexController::class, 'projects']
    )->name('get.front.projects');

    Route::get(
        '/tweets',
        [FrontIndexController::class, 'tweets']
    )->name('get.front.tweets');

    Route::get(
        '/posts',
        [FrontIndexController::class, 'posts']
    )->name('get.front.posts');

    Route::get(
        '/posts/{id}',
        [FrontIndexController::class, 'findPost']
    )->name('get.front.posts.find');

    Route::get(
        '/timeline',
        [FrontIndexController::class, 'timeline']
    )->name('get.front.timeline');
});

//Backend
Route::middleware('auth')->group(function () {
    Route::namespace('Back')->group(function () {
        Route::prefix('api')->group(function () {
            Route::get(
                '/github',
                [GitHubController::class, 'index']
            )->name('get.back.github');

            Route::get(
                '/languages',
                [LanguageController::class, 'index']
            )->name('get.back.languages');

            Route::get(
                '/languages/{id}',
                [LanguageController::class, 'find']
            )->name('get.back.languages.find');

            Route::post(
                '/languages',
                [LanguageController::class, 'store']
            )->name('post.back.languages.store');

            Route::post(
                '/languages/{id}',
                [LanguageController::class, 'find']
            )->name('post.back.languages.update');

            Route::get(
                '/contacts',
                [BackContactController::class, 'index']
            )->name('get.back.contacts');

            Route::get(
                '/projects',
                [ProjectController::class, 'index']
            )->name('get.back.projects');

            Route::get(
                '/posts',
                [PostController::class, 'index']
            )->name('get.back.posts');
        });

        Route::prefix('back')->group(function () {
            Route::get(
                '/',
                [BackIndexController::class, 'index']
            )->name('get.back.index');

            Route::get(
                '/posts',
                [BackIndexController::class, 'wildcard']
            )->where('wildcard', '.*')->name('get.back.spa');
        });
    });
});

//Frontend
Route::namespace('Front')->group(function () {
    Route::get(
        '/{wildcard}',
        [FrontIndexController::class, 'index']
    )->name('get.front.spa')
    ->where('wildcard', '.*');
});
