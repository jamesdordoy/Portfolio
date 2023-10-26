<?php

namespace App\Http\Controllers;

use App\Actions\Contact\CreateContact;
use App\Actions\Contact\SendContactEmail;
use App\Models\Contact;
use App\Models\Data\Contact as ContactData;
use Illuminate\Http\RedirectResponse;
use Illuminate\Pipeline\Pipeline;
use Spatie\DiscordAlerts\Facades\DiscordAlert;

final class ContactController extends Controller
{
    public function __invoke(ContactData $request): RedirectResponse
    {
        app(Pipeline::class)
            ->send(
                ContactData::from($request->all())
            )
            ->through([
                CreateContact::class,
                SendContactEmail::class,
            ])
            ->then(
                fn(Contact $contact) =>
                    DiscordAlert::message(sprintf('%s has reached out to you via the contact form: %s', $contact->name, $contact->message))
            );

        return redirect(CreateContact::redirectTo());
    }
}
