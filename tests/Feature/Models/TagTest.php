<?php

use App\Models\Tag;
use App\Models\Project;
use App\Models\Language;

test('test_tag_taggable_relationship_with_languages', function () {
    $language = Language::factory()->create();

    $tag = Tag::factory()->create([
        'taggable_id' => $language->id,
        'taggable_type' => Language::class,
    ]);

    $this->assertInstanceOf(Language::class, $tag->taggable);
});


test('test_tag_taggable_relationship_with_projects', function () {
    $project = Project::factory()->create();

    $tag = Tag::factory()->create([
        'taggable_id' => $project->id,
        'taggable_type' => Project::class,
    ]);

    $this->assertInstanceOf(Project::class, $tag->taggable);
});
