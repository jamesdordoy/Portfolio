

<?php

use App\Actions\Contact\CreateContact;
use App\Actions\Contact\SendContactEmail;
use Illuminate\Support\Facades\Mail;
use App\Mail\ContactMail;
use App\Models\Contact;
use App\Models\Data\Contact as ContactData;
use Illuminate\Pipeline\Pipeline;
use Illuminate\Support\Facades\Bus;

beforeEach(function () {
    config()->set('discord-alerts.webhook_urls.default', 'https://test-domain.com');
    Bus::fake();
});

test('A contact email can be created and queued', function () {
    Mail::fake();

    $data = ContactData::from([
        'name' => 'test',
        'email' => 'test@test.com',
        'message' => 'testing'
    ]);

    app(Pipeline::class)
        ->send($data)
        ->through([
            CreateContact::class,
            SendContactEmail::class,
        ])
        ->then(function ($contact) {
            Mail::assertQueued(ContactMail::class);
        });
});

test('A contact email renders', function () {

    $contact = Contact::factory()->create();

    $mail = new ContactMail($contact);

    $mail->build();

    $mail->assertSeeInHtml($contact->name);
});
