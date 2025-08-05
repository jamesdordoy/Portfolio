<?php

use App\Http\Controllers\ContactController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\NewsletterController;
use Illuminate\Foundation\Http\Middleware\HandlePrecognitiveRequests;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Route;

Route::get('/', [HomeController::class, 'index'])->name('home');
Route::get('/newsletter/unsubscribe', [NewsletterController::class, 'destroy'])->name('newsletter.destroy')->middleware('signed');

Route::middleware([HandlePrecognitiveRequests::class])->group(function () {
    Route::post('/contact', ContactController::class)->name('contact.store');
    Route::post('/newsletter', [NewsletterController::class, 'store'])->name('newsletter.store');
});

Route::get('/recaptcha/validate', function (Request $request) {
    $response = Http::asForm()->post('https://www.google.com/recaptcha/api/siteverify', [
        'secret' => env('RECAPTCHA_SECRET_KEY'),
        'response' => $request->input('token'),
    ]);

    return $response->json();
});
