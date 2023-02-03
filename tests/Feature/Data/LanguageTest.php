<?php

use App\Models\Data\Language;

test('test_language_data_object_name', function () {
    $createdAt = new DateTime();
    $updatedAt = new DateTime();

    $language = new Language(1, 'HTML', 'mark up language', $createdAt, $updatedAt);

    $this->assertEquals($language->name, 'HTML');
});
