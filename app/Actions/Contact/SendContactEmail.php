<?php

namespace App\Actions\Contact;

use App\Mail\ContactMail;
use App\Models\Contact;
use Closure;
use Illuminate\Support\Facades\Mail;

class SendContactEmail
{
    public function __invoke(Contact $contact)
    {
        $this->handle($contact, fn() => null);
    }

    public function handle(Contact $contact, Closure $next)
    {
        Mail::to($contact->email)
            ->queue(new ContactMail($contact));

        return $next($contact);
    }
}
