<?php

use App\Models\Data\Game;

test('test_project_data_object_name', function () {

    $game = Game::from([
        'name' => 'Testing',
        'description' => 'description',
        'link' => 'http://localhost',
        'icon' => 'icon',
        'complete' => 0,
        'private' => 0,
    ]);

    $this->assertEquals($game->name, 'Testing');
});
