<?php

use App\Http\Controllers\HomeController;
use Illuminate\Support\Facades\Bus;
use Illuminate\Support\Facades\Mail;
use Inertia\Testing\AssertableInertia as Assert;

beforeEach(function () {
    config()->set('discord-alerts.webhook_urls.default', 'https://test-domain.com');
    Bus::fake();
    Mail::fake();
});

test('Contact end point fails with no name', function () {
    $this->followingRedirects()
        ->post(route('contact.store'), [
            'email' => 'test@test.com',
            'message' => 'message',
        ])
        ->assertInertia(fn (Assert $page) => $page
            ->component(HomeController::INDEX)
            ->has(
                'errors.name'
            ));
});

test('Contact end point fails with no email', function () {
    $this->followingRedirects()
        ->post(route('contact.store'), [
            'name' => 'test',
            'message' => 'message',
        ])
        ->assertInertia(fn (Assert $page) => $page
            ->component(HomeController::INDEX)
            ->has(
                'errors.email'
            ));
});

test('Contact end point fails with no message', function () {
    $this->followingRedirects()
        ->post(route('contact.store'), [
            'name' => 'test',
            'email' => 'test@test.com',
        ])
        ->assertInertia(fn (Assert $page) => $page
            ->component(HomeController::INDEX)
            ->has(
                'errors.message'
            ));
});

test('Contact end point can be submitted', function () {
    $this->followingRedirects()
        ->post(route('contact.store'), [
            'name' => 'test',
            'email' => 'test@test.com',
            'message' => 'message',
        ])
        ->assertInertia(
            fn (Assert $page) => $page
                ->component(HomeController::INDEX)
        );
});
