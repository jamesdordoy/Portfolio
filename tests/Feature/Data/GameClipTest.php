<?php

use App\Dto\GameClip;

test('test_project_data_object_name', function () {
    $clip = GameClip::from([
        'url' => 'http://localhost',
    ]);

    $this->assertEquals($clip->url, 'http://localhost');
});
