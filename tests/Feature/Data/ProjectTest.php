<?php

use App\Models\Data\Project;
use Spatie\LaravelData\Attributes\Validation;

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
    $rules = Project::rules();

    $this->assertTrue(array_key_exists('name', $rules));
    $this->assertTrue(array_key_exists('description', $rules));
    $this->assertTrue(array_key_exists('owner', $rules));

    $this->assertTrue($rules['name'][0] instanceof Validation\Required);
    $this->assertTrue($rules['description'][0] instanceof Validation\Required);
    $this->assertTrue($rules['owner'][0] instanceof Validation\Required);

    $this->assertTrue($rules['name'][1] instanceof Validation\StringType);
    $this->assertTrue($rules['description'][1] instanceof Validation\StringType);
    $this->assertTrue($rules['owner'][1] instanceof Validation\StringType);

    $this->assertTrue($rules['name'][2] instanceof Validation\Min);
    $this->assertTrue($rules['description'][2] instanceof Validation\Min);
});
