<?php

use App\Models\Data\Tag;

test('test_language_data_object_name', function () {
    $tag = new Tag(1, 1, App\Models\Language::class);

    $this->assertEquals($tag->taggable_id, 1);
});
