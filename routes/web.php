<?php

use App\Http\Controllers\ContactController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\NewsletterController;
use App\Http\Middleware\HandleInertiaRequests;
use Illuminate\Foundation\Http\Middleware\HandlePrecognitiveRequests;
use Illuminate\Http\Request;
use Illuminate\Session\Middleware\StartSession;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Route;

Route::get('/', [HomeController::class, 'index'])->name('home');

Route::middleware([HandlePrecognitiveRequests::class])->group(function () {
    Route::post('/contact', ContactController::class)->name('contact.store');
    Route::post('/newsletter', [NewsletterController::class, 'store'])->name('newsletter.store');
});

Route::get('/recaptcha/validate', function (Request $request) {
    $response = Http::timeout(5)->asForm()->post('https://www.google.com/recaptcha/api/siteverify', [
        'secret' => config('recaptcha.api_secret_key'),
        'response' => $request->input('token'),
    ]);

    if ($response->failed()) {
        return response()->json(['success' => false, 'error' => 'verification-unavailable'], 502);
    }

    return $response->json();
})->withoutMiddleware([StartSession::class, HandleInertiaRequests::class]);
