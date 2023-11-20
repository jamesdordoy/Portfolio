<?php

use App\Models\Language;
use App\Models\Project;
use App\Models\Tag;

test('test_language_tag_relationship', function () {
    $project = Project::factory()->create();

    $tag = Tag::factory()->create([
        'taggable_id' => $project->id,
        'taggable_type' => Project::class,
    ]);

    $language = Language::factory()->create();

    $language->tags()->attach($tag);

    $this->assertTrue($language->tags->contains($tag));
});

test('test_languages_can_be_ordered', function () {
    $languageA = Language::factory()->create();
    $languageB = Language::factory()->create();
    $languageC = Language::factory()->create();

    $languages = Language::ordered()->get();

    $this->assertTrue($languages->first()->is($languageA));
});
