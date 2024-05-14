<?php

use App\Dto\Tag;
use App\Dto\Taggable;

test('test_tag_data_object_name', function () {
    $taggable = Taggable::from([
        'name' => 'php',
        'description' => 'php',
    ]);

    $tag = Tag::from([
        'taggable_id' => '1',
        'taggable_type' => App\Models\Language::class,
        'taggable' => $taggable,
    ]);

    $this->assertEquals($tag->taggable_id, 1);
});