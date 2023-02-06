<?php

use App\Models\Data\Language;

test('test_language_data_object_name', function () {
    $language = Language::from([
        'name' => 'HTML',
        'description' => 'mark up language',
    ]);

    $this->assertEquals($language->name, 'HTML');
});
