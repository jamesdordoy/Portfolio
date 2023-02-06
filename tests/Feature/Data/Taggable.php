<?php

use App\Models\Data\Taggable;

test('test_tag_data_object_name', function () {
    $taggable = Taggable::from([
        'name' => 'php',
        'description' => 'php'
    ]);

    $this->assertEquals($taggable->name, 'php');
});


test('test_tag_from_model', function () {
    $taggable = Taggable::from([
        'name' => 'php',
        'description' => 'php'
    ]);

    $newTaggable = Taggable::fromModel($taggable);

    $this->assertEquals($newTaggable, $taggable);
});
