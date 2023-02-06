<?php

namespace App\Actions\Contact;

use App\Models\Contact;
use App\Mail\ContactMail;
use Illuminate\Support\Facades\Mail;
use Closure;
use Spatie\DiscordAlerts\Facades\DiscordAlert;

class SendContactEmail
{
    public function handle(Contact $contact, Closure $next)
    {
        Mail::to($contact->email)
            ->queue(new ContactMail($contact));

        DiscordAlert::message(sprintf('%s has reached out to you via the contact form: %s', $contact->name, $contact->message));

        return $next($contact);
    }
}
