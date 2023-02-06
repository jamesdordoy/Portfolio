<?php

namespace App\Http\Controllers;

use App\Models\Contact;
use App\Actions\Contact\CreateContact;
use App\Actions\Contact\SendContactEmail;
use App\Models\Data\Contact as ContactData;
use Illuminate\Pipeline\Pipeline;

class ContactController extends Controller
{
    public function __invoke(ContactData $request)
    {
        $data = ContactData::from($request->all());

        app(Pipeline::class)
            ->send($data)
            ->through([
                CreateContact::class,
                SendContactEmail::class,
            ])
            ->then(fn (Contact $contact) => $contact);

        return redirect(CreateContact::redirectTo());
    }
}
