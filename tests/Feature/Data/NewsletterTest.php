<?php

use App\Dto\Newsletter;
use Spatie\LaravelData\Attributes\Validation;

test('test_newsletter_data_object_name', function () {
    $contact = Newsletter::from([
        'email' => 'test@gmail.com',
    ]);

    $this->assertEquals($contact->email, 'test@gmail.com');
});

test('test_newsletter_data_rules', function () {
    $rules = Newsletter::rules();
    $this->assertTrue(array_key_exists('email', $rules));

    $this->assertTrue($rules['email'][0] instanceof Validation\Required);
    $this->assertTrue($rules['email'][1] instanceof Validation\Unique);
    $this->assertTrue($rules['email'][2] instanceof Validation\Email);
});
