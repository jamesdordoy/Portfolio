<?php

use App\Models\Data\Tag;
use App\Models\Data\Taggable;

test('test_project_data_object_name', function () {
    $createdAt = new DateTime();
    $updatedAt = new DateTime();
    $taggable = new Taggable(1, 'php', 'php');

    $tag = [new Tag(1, 1, App\Models\Language::class, $taggable)];
});
