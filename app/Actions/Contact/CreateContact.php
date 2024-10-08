<?php

namespace App\Actions\Contact;

use App\Dto\Contact as ContactData;
use App\Models\Contact;
use Closure;

class CreateContact
{
    public function __invoke(ContactData $data): Contact
    {
        return $this->handle($data, fn (Contact $contact) => $contact);
    }

    public function handle(ContactData $data, Closure $next)
    {
        return tap(
            Contact::create($data->all()),
            fn (Contact $contact) => $next($contact)
        );
    }

    public static function redirectTo(): string
    {
        return route('home');
    }
}
