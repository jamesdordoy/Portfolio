<?php

use App\Actions\Newsletter\CreateNewsletter;
use App\Models\Data\Newsletter as NewsletterData;
use App\Models\Newsletter;

test('A newsletter can be created', function () {
    $data = NewsletterData::from([
        'email' => 'test@test.com',
    ]);

    app()->make(CreateNewsletter::class)->handle($data, fn(Newsletter $newsletter) => $this->assertEquals($newsletter->email, 'test@test.com'));
});

test('A newsletter redirects back to the listing', function () {
    $action = new CreateNewsletter();

    $this->assertEquals($action->redirectTo(), route('home'));
});
