<?php

namespace App\Services;

use App\Contracts\Services\ContactServiceContract;
use App\Mail\ContactMeMail;
use App\Mail\LetMeKnowMail;
use App\Mail\NewsletterSignUpMail;
use App\Models\Contact;
use App\Models\Newsletter;
use Illuminate\Support\Facades\Mail;

class ContactService extends Service implements ContactServiceContract
{
    public function store(array $data): Contact
    {
        $contact = new Contact();
        $contact->name = $data['name'];
        $contact->email = $data['email'];
        $contact->message = $data['message'];
        $contact->save();

        return $contact;
    }

    public function storeNewsletter($email): Newsletter
    {
        $newsletter = new Newsletter();
        $newsletter->email = $email;
        $newsletter->save();

        return $newsletter;
    }

    public function unsubscribeFromNewsletter(Newsletter $newsletter): bool
    {
        return $newsletter->delete();
    }

    public function sendContactMeEmail(Contact $contact): void
    {
        Mail::to($contact->email)->send(new ContactMeMail($contact));
    }

    public function sendLetMeKnowEmail(Contact $contact): void
    {
        Mail::to(config('mail.recipient.email'))->send(new LetMeKnowMail($contact));
    }

    public function sendNewsLetterEmail(Newsletter $newsletter): void
    {
        Mail::to($newsletter->email)->send(new NewsletterSignUpMail($newsletter));
    }
}
