<?php

use App\Http\Controllers\HomeController;
use Inertia\Testing\AssertableInertia as Assert;

test('Home Page can render', function () {
    $response = $this->get('/');

    $response
        ->assertStatus(200)
        ->assertInertia(
            fn (Assert $page) => dd($page)
            //  $page
            //     ->component(HomeController::INDEX)
            //     ->has('projects')
            //     ->has('timeline')
        );
});
