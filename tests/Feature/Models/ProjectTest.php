<?php

use App\Models\Tag;
use App\Models\Project;
use App\Models\Language;

test('test_project_tag_relationship', function () {
    $language = Language::factory()->create();

    $tag = Tag::factory()->create([
        'taggable_id' => $language->id,
        'taggable_type' => Project::class,
    ]);

    $project = Project::factory()->create();

    $project->tags()->attach($tag);

    $this->assertTrue($project->tags->contains($tag));
});


test('test_a_project_is_public', function () {
    $projectA = Project::factory()->create([
        'private' => 0,
    ]);
    $projectB = Project::factory()->create([
        'private' => 1,
    ]);
    $projectC = Project::factory()->create([
        'private' => 1,
    ]);

    $projects = Project::public()->get();

    $this->assertTrue($projects->first()->is($projectA));
    $this->assertTrue($projects->last()->is($projectA));
});
