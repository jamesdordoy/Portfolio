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

Route::get('/', 'Front\IndexController@index');
Route::post('/contact', 'ContactController@store');


Route::namespace('Back')->prefix('back')->group(function() {
    Route::middleware('auth')->group(function () {

        Route::get('/', 'IndexController@index');
        Route::get('/playground', 'IndexController@playground');

        //Projects
        Route::get('/projects', 'ProjectController@index');
        Route::get('/projects/{id}', 'ProjectController@edit');
        Route::put('/projects/{id}', 'ProjectController@update');
        Route::post('/projects', 'ProjectController@store');
        Route::delete('/projects/{id}', 'ProjectController@destroy');

        //Languages
        Route::get('/languages', 'LanguageController@index');
        Route::get('/languages/{id}', 'LanguageController@edit');
        Route::put('/languages/{id}', 'LanguageController@update');
        Route::post('/languages', 'LanguageController@store');
        Route::delete('/languages/{id}', 'LanguageController@destroy');

        //Dependencies
        Route::get('/dependencies', 'DependenciesController@index');

        //Examples
        Route::get('/examples', 'ExampleController@index');
        Route::get('/twitter', 'TwitterController@index');
        Route::get('/contact', 'ContactController@index');
        Route::get('/github', 'GitHubController@index');
        Route::get('/bitbucket/callback', 'BitBucketController@callback');
        Route::get('/bitbucket', 'BitBucketController@index');
    });
});


