<?php

use App\Models\Data\Tag;
use App\Models\Data\Taggable;

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

test('test_tag_from_model', function () {
    $taggable = Taggable::from([
        'name' => 'php',
        'description' => 'php',
    ]);

    $tag = Tag::from([
        'taggable_id' => '1',
        'taggable_type' => App\Models\Language::class,
        'taggable' => $taggable,
    ]);

    $newTag = Tag::fromModel($tag);

    $this->assertEquals($newTag, $tag);
});
