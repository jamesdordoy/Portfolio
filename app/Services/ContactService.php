<?php

namespace App\Services;

use App\Models\Contact;
use App\Mail\ContactMeMail;
use App\Contracts\Services\ContactServiceContract;

class ContactService extends Service implements ContactServiceContract
{
    public function store(array $data)
    {
        $contact = new Contact;
        $contact->name = $data['name'];
        $contact->email = $data['email'];
        $contact->message = $data['message'];

        if ($contact->save()) {
            return $contact;
        }
    }

    public function sendContactMeEmail(Contact $contact)
    {
        \Mail::to($contact->email)->send(new ContactMeMail($contact));
    }
}
