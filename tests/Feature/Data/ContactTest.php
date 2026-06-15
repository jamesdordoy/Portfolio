<?php

use App\Dto\Contact;

test('test_contact_data_object_name', function () {
    $contact = Contact::from([
        'name' => 'test',
        'email' => 'test@gmail.com',
        'message' => 'message',
    ]);

    $this->assertEquals($contact->name, 'test');
});

test('test_contact_data_rules', function () {
    $rules = Contact::getValidationRules([]);

    $this->assertTrue(array_key_exists('name', $rules));
    $this->assertTrue(array_key_exists('email', $rules));
    $this->assertTrue(array_key_exists('message', $rules));

    $this->assertContains('required', $rules['name']);
    $this->assertContains('required', $rules['email']);
    $this->assertContains('required', $rules['message']);

    $this->assertContains('min:3', $rules['name']);
    $this->assertContains('email:rfc', $rules['email']);
    $this->assertContains('min:3', $rules['message']);
});
