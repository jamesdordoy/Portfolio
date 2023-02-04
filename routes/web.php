<?php

use App\Http\Controllers\HomeController;
use App\Http\Controllers\NewsletterController;
use Illuminate\Support\Facades\Route;

Route::get('/', [HomeController::class, 'index'])->name('home');

// Mail Routes
Route::post('/contact', [
    'as'   => 'front.post.contact',
    'uses' => 'ContactController@store',
]);

Route::post('/newsletter', [NewsletterController::class, 'store'])->name('newsletter.store');

Route::get('/unsubscribe/{newsletter}', [
    'as'   => 'front.get.unsubscribe',
    'uses' => 'ContactController@newsletterUnsubscribe',
])->middleware('signed');
