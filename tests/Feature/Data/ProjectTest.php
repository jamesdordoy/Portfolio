<?php

use App\Dto\Project;

test('test_project_data_object_name', function () {
    $project = Project::from([
        'name' => 'Testing',
        'description' => 'description',
        'owner' => 'me',
        'link' => 'http://localhost',
        'icon' => 'icon',
        'complete' => 0,
        'private' => 0,
    ]);

    $this->assertEquals($project->name, 'Testing');
});

test('test_project_data_rules', function () {
    $rules = Project::getValidationRules([]);

    $this->assertTrue(array_key_exists('name', $rules));
    $this->assertTrue(array_key_exists('description', $rules));
    $this->assertTrue(array_key_exists('owner', $rules));

    $this->assertContains('required', $rules['name']);
    $this->assertContains('required', $rules['description']);
    $this->assertContains('required', $rules['owner']);

    $this->assertContains('min:3', $rules['name']);
    $this->assertContains('min:3', $rules['description']);
    $this->assertContains('min:3', $rules['owner']);
});
