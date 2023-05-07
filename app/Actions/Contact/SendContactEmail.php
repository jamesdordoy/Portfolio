<?php

namespace App\Actions\Contact;

use App\Models\Contact;
use App\Mail\ContactMail;
use Illuminate\Support\Facades\Mail;
use Closure;

class SendContactEmail
{
    public function handle(Contact $contact, Closure $next)
    {
        Mail::to($contact->email)
            ->queue(new ContactMail($contact));

        return $next($contact);
    }
}
