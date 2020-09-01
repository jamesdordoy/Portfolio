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

//Auth routes

use Illuminate\Support\Facades\Route;

Route::post('/login', [
    'as' => 'front.post.login',
    'uses' => 'Auth\LoginController@login',
]);

Route::post('/logout', [
    'as' => 'logout',
    'uses' => 'Auth\LoginController@logout',
]);

// Mail Routes
Route::post('/contact', [
    'as' => 'front.post.contact',
    'uses' => 'ContactController@store',
]);

Route::post('/newsletter', [
    'as' => 'front.post.newsletter',
    'uses' => 'ContactController@newsletter',
]);

Route::get('/unsubscribe/{newsletter}', [
    'as' => 'front.get.unsubscribe',
    'uses' => 'ContactController@newsletterUnsubscribe',
])->middleware('signed');

//Frontend
Route::namespace('Front')->group(function() {
    Route::get('/', [
        'as' => 'front.get.index',
        'uses' => 'IndexController@index',
    ]);

    Route::get('/languages', [
        'as' => 'front.get.languages',
        'uses' => 'IndexController@languages',
    ]);

    Route::get('/projects', [
        'as' => 'front.get.projects',
        'uses' => 'IndexController@projects',
    ]);

    Route::get('/tweets', [
        'as' => 'front.get.tweets',
        'uses' => 'IndexController@tweets',
    ]);

    Route::get('/posts', [
        'as' => 'front.get.posts',
        'uses' => 'IndexController@posts',
    ]);

    Route::get('/posts/{id}', [
        'as' => 'front.get.posts.find',
        'uses' => 'IndexController@findPost',
    ]);

    Route::get('/timeline', [
        'as' => 'front.get.timeline',
        'uses' => 'IndexController@timeline',
    ]);
});

//Backend
Route::middleware('auth')->group(function () {

    Route::namespace('Back')->group(function() {

        Route::prefix('api')->group(function() {
            Route::get('/github', 'GitHubController@index');
            Route::get('/languages', 'LanguageController@index');
            Route::get('/languages/{id}', 'LanguageController@find');
            Route::post('/languages/{id}', 'LanguageController@update');
            Route::post('/languages', 'LanguageController@store');
            Route::get('/contacts', 'ContactController@index');
            Route::get('/projects', 'ProjectController@ajax');
            Route::get('/posts', 'PostController@index');
        });

        Route::prefix('back')->group(function() {
            Route::get('/', 'IndexController@index');
        });
    });

    Route::get('/back/{wildcard}', function () {
        return view('back/home');
    })->where('wildcard', '.*');
});

//Frontend
Route::namespace('Front')->group(function() {
    Route::get('/{wildcard}', [
        'as' => 'front.get.spa',
        'uses' => 'IndexController@index',
    ])->where('wildcard', '.*');
});
