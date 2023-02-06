<?php

use App\Models\Data\Contact;
use Spatie\LaravelData\Attributes\Validation;

test('test_contact_data_object_name', function () {
    $contact = Contact::from([
        'name' => 'test',
        'email' => 'test@gmail.com',
        'message' => 'message',
    ]);

    $this->assertEquals($contact->name, 'test');
});

test('test_contact_data_rules', function () {
    $rules = Contact::rules();

    $this->assertTrue(array_key_exists('name', $rules));
    $this->assertTrue(array_key_exists('email', $rules));
    $this->assertTrue(array_key_exists('message', $rules));

    $this->assertTrue($rules['name'][0] instanceof Validation\Required);
    $this->assertTrue($rules['email'][0] instanceof Validation\Required);
    $this->assertTrue($rules['message'][0] instanceof Validation\Required);

    $this->assertTrue($rules['name'][1] instanceof Validation\Min);
    $this->assertTrue($rules['email'][1] instanceof Validation\Email);
    $this->assertTrue($rules['message'][1] instanceof Validation\Min);
});
