<?php

use App\Models\Data\Language as LanguageData;
use App\Actions\Languages\CreateLanguage;

test('A language can be created', function () {
    $data = LanguageData::from([
        'name' => 'HTML',
        'description' => 'Markup Language'
    ]);

    $action = new CreateLanguage();

    $language = $action->create($data);

    $this->assertEquals($language->name, 'HTML');
});

test('A language redirects back to the listing', function () {
    $action = new CreateLanguage();

    $this->assertEquals($action->redirectTo(), route('home'));
});
