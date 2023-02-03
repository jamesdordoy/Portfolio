<?php

use App\Models\Data\Contact;

test('test_contact_data_object_name', function () {
    $createdAt = new DateTime();
    $updatedAt = new DateTime();

    $contact = new Contact(1, 'test', 'test@gmail.com', 'message', $createdAt, $updatedAt);

    $this->assertEquals($contact->name, 'test');
});
