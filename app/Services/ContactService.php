<?php

namespace App\Services;


use App\Models\Contact;
use App\Models\Newsletter;
use App\Mail\ContactMeMail;
use App\Mail\LetMeKnowMail;
use App\Mail\NewsletterSignUpMail;
use Illuminate\Support\Facades\Mail;
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

        return false;
    }

    public function storeNewsletter($email)
    {
        $newsletter = new Newsletter;
        $newsletter->email = $email;

        if ($newsletter->save()) {
            return $newsletter;
        }

        return false;
    }

    public function unsubscribeFromNewsletter(Newsletter $newsletter)
    {
        return $newsletter->delete();
    }

    public function sendContactMeEmail(Contact $contact)
    {
        Mail::to($contact->email)->send(new ContactMeMail($contact));
    }

    public function sendLetMeKnowEmail(Contact $contact)
    {
        Mail::to(config('mail.recipient.email'))->send(new LetMeKnowMail($contact));
    }

    public function sendNewsLetterEmail(Newsletter $newsletter)
    {
        Mail::to($newsletter->email)->send(new NewsletterSignUpMail($newsletter));
    }
}
