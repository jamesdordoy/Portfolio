<?php

use App\Http\Controllers\HomeController;
use Illuminate\Support\Facades\Bus;
use Inertia\Testing\AssertableInertia as Assert;

beforeEach(function () {
    config()->set('discord-alerts.webhook_urls.default', 'https://test-domain.com');
    Bus::fake();
});

test('Newsletter end point fails with no email', function () {
    $response = $this
        ->post(route('newsletter.store'), ['email' => '']);

    $response->assertRedirect(route('home'));

    $response->assertSessionHasErrors([
        'email' => 'The email field is required.',
    ]);

    $this->assertSame(
        'The email field is required.',
        session()->get('errors')->getBag('default')->first('email')
    );
});

test('Newsletter end point success with a valid email', function () {
    $this->followingRedirects()
        ->post(route('newsletter.store'), ['email' => 'test@test.com'])
        ->assertInertia(
            fn (Assert $page) => $page
                ->component(HomeController::INDEX)
        );
});

test('Newsletter end point fails with an duplicate email', function () {
    $this->followingRedirects()
        ->post(route('newsletter.store'), ['email' => 'test@test.com'])
        ->assertInertia(
            fn (Assert $page) => $page
                ->component(HomeController::INDEX)
        );

    $this->followingRedirects()
        ->post(route('newsletter.store'), ['email' => 'test@test.com'])
        ->assertInertia(fn (Assert $page) => $page
            ->component(HomeController::INDEX)
            ->has(
                'errors.email'
            ));
});
