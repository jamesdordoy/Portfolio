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

/******** Public Routes ********/
Route::get('/', 'HomeController@index');
Route::post('/contact', 'ContactController@store');

/******** AUTH ROUTES ********/
Route::get('/dash', 'DashboardController@index');

//Projects
Route::get('/dash/projects', 'ProjectController@index');
Route::get('/dash/projects/{id}', 'ProjectController@edit');
Route::put('/dash/projects/{id}', 'ProjectController@update');
Route::post('/dash/projects', 'ProjectController@store');
Route::delete('/dash/projects/{id}', 'ProjectController@destroy');

//Languages
Route::get('/dash/languages', 'LanguageController@index');
Route::get('/dash/languages/{id}', 'LanguageController@edit');
Route::put('/dash/languages/{id}', 'LanguageController@update');
Route::post('/dash/languages', 'LanguageController@store');
Route::delete('/dash/languages/{id}', 'LanguageController@destroy');

//Dependencies
Route::get('/dash/dependencies', 'DependenciesController@index');

//Examples
Route::get('/dash/examples', 'ExampleController@index');
Route::get('/dash/twitter', 'TwitterController@index');
Route::get('/dash/contact', 'ContactController@index');
Route::get('/dash/github', 'GitHubController@index');
Route::get('/dash/bitbucket/callback', 'BitBucketController@callback');
Route::get('/dash/bitbucket', 'BitBucketController@index');

// Login
Route::get('login', 'Auth\LoginController@showLoginForm')->name('login');
Route::post('login', 'Auth\LoginController@login');
Route::get('/logout', '\App\Http\Controllers\Auth\LoginController@logout');

Route::get('password/reset', 'Auth\ForgotPasswordController@showLinkRequestForm')->name('password.request');
Route::post('password/email', 'Auth\ForgotPasswordController@sendResetLinkEmail')->name('password.email');
Route::get('password/reset/{token}', 'Auth\ResetPasswordController@showResetForm')->name('password.reset');
Route::post('password/reset', 'Auth\ResetPasswordController@reset');