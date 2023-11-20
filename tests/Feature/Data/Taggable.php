<?php

use App\Models\Data\Taggable;

test('test_tag_data_object_name', function () {
    $taggable = Taggable::from([
        'name' => 'php',
        'description' => 'php',
    ]);

    $this->assertEquals($taggable->name, 'php');
});
