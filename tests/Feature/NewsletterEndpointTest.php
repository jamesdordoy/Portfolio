<?php

use Illuminate\Support\Facades\Bus;
use Inertia\Testing\AssertableInertia as Assert;

beforeEach(function () {
    Bus::fake();
});

test('Newsletter end point fails with no email', function () {
    $this->followingRedirects()
        ->post(route('newsletter.store'), ['email' => ''])
        ->assertInertia(fn (Assert $page) => $page
            ->component('Home')
            ->has(
                'errors.email'
            ));
});

test('Newsletter end point fails with an invalid email', function () {
    $this->followingRedirects()
        ->post(route('newsletter.store'), ['email' => 'invalid'])
        ->assertInertia(fn (Assert $page) => $page
            ->component('Home')
            ->has(
                'errors.email'
            ));
});

test('Newsletter end point success with a valid email', function () {
    $this->followingRedirects()
        ->post(route('newsletter.store'), ['email' => 'test@test.com'])
        ->assertInertia(
            fn (Assert $page) => $page
                ->component('Home')
        );
});


test('Newsletter end point fails with an duplicate email', function () {
    $this->followingRedirects()
        ->post(route('newsletter.store'), ['email' => 'test@test.com'])
        ->assertInertia(
            fn (Assert $page) => $page
                ->component('Home')
        );

    $this->followingRedirects()
        ->post(route('newsletter.store'), ['email' => 'test@test.com'])
        ->assertInertia(fn (Assert $page) => $page
            ->component('Home')
            ->has(
                'errors.email'
            ));
});
