<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::get('/fake-users', [
    'as' => 'front.get.api.fake.users',
    'uses' => 'Front\FakeDataController@users',
]);

Route::get('/fake-search', [
    'as' => 'front.get.api.fake.search',
    'uses' => 'Front\FakeDataController@search',
]);

