<?php

use App\Models\Data\Tag;

use App\Models\Data\Taggable;

test('test_language_data_object_name', function () {

    $taggable = new Taggable(1, 'php', 'php');
    $tag = new Tag(1, 1, App\Models\Language::class, $taggable);

    $this->assertEquals($tag->taggable_id, 1);
});
