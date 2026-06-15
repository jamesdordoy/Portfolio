<?php

namespace App\Actions\Contact;

use App\Mail\ContactMail;
use App\Models\Contact;
use Closure;
use Illuminate\Support\Facades\Mail;

class SendContactEmail
{
    public function __invoke(Contact $contact): Contact
    {
        return $this->handle($contact, fn ($contact) => $contact);
    }

    public function handle(Contact $contact, Closure $next)
    {
        Mail::to($contact->email)
            ->queue(new ContactMail($contact));

        return tap(
            $contact->refresh(),
            fn (Contact $contact) => $next($contact)
        );
    }
}
