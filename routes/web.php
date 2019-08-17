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

Auth::routes();

Route::post('/contact', [
    'as' => 'front.post.contact',
    'uses' => 'ContactController@store',
]);

Route::post('/newsletter', [
    'as' => 'front.post.newsletter',
    'uses' => 'ContactController@newsletter',
]);

Route::middleware('auth')->group(function () {

    Route::namespace('Back')->group(function() {
        Route::prefix('back')->group(function() {
            Route::get('/', 'IndexController@index');
        });
    
        Route::prefix('api')->group(function() {
            Route::get('/github', 'GitHubController@index');
            Route::get('/languages', 'LanguageController@index');
            Route::get('/languages/{id}', 'LanguageController@find');
            Route::post('/languages/{id}', 'LanguageController@update');
            Route::post('/languages', 'LanguageController@store');
            Route::get('/contacts', 'ContactController@index');
            Route::get('/projects', 'ProjectController@ajax');
            
        });
    });

    Route::get('/back/{wildcard}', function () {
        return view('back/home');
    })->where('wildcard', '.*');
});

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

    Route::get('/privacy', [
        'as' => 'front.get.privacy',
        'uses' => 'IndexController@privacyPolicy',
    ]); 
});
