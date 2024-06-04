

<?php

use App\Actions\Contact\CreateContact;
use App\Actions\Contact\SendContactEmail;
use App\Dto\Contact as ContactData;
use App\Mail\ContactMail;
use App\Models\Contact;
use Illuminate\Pipeline\Pipeline;
use Illuminate\Support\Facades\Bus;
use Illuminate\Support\Facades\Mail;

beforeEach(function () {
    config()->set('discord-alerts.webhook_urls.default', 'https://test-domain.com');
    Bus::fake();
});

test('A contact email can be created and queued', function () {
    Mail::fake();

    $data = ContactData::from([
        'name' => 'test',
        'email' => 'test@test.com',
        'message' => 'testing',
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

    $mailable = new ContactMail($contact);

    $mailable->assertSeeInHtml($contact->name);
});
