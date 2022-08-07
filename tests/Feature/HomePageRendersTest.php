<?php

test('Home Page can render', function () {
    $response = $this->get('/');

    $response->assertStatus(200);
});
