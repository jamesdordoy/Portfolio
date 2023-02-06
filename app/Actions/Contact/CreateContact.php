<?php

namespace App\Actions\Contact;

use Closure;
use App\Models\Contact;
use App\Models\Data\Contact as ContactData;

class CreateContact
{
    public function handle(ContactData $data, Closure $next)
    {
        $contact = Contact::create(
            [
                'name' =>  $data->name,
                'email' => $data->email,
                'message' => $data->message,
            ]
        );

        return $next($contact);
    }

    public static function redirectTo(): string
    {
        return route('home');
    }
}
