<?php

use Inertia\Testing\AssertableInertia as Assert;

test('Home Page can render', function () {
    $response = $this->get('/');

    $response
        ->assertStatus(200)
        ->assertInertia(
            fn (Assert $page) => $page
                ->component('Home')
                ->has('projects')
                ->has('timeline')
        );
});
