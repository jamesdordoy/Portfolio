<?php

use App\Http\Controllers\ContactController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\NewsletterController;
use Illuminate\Foundation\Http\Middleware\HandlePrecognitiveRequests;
use Illuminate\Support\Facades\Route;

Route::get('/', [HomeController::class, 'index'])->name('home');
Route::get('/newsletter/unsubscribe', [NewsletterController::class, 'destroy'])->name('newsletter.destroy')->middleware('signed');

Route::middleware([HandlePrecognitiveRequests::class])->group(function() {
    Route::post('/contact', ContactController::class)->name('contact.store');
    Route::post('/newsletter', [NewsletterController::class, 'store'])->name('newsletter.store');
});
