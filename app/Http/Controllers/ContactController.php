<?php

namespace App\Http\Controllers;

use App\Actions\Contact\CreateContact;
use App\Actions\Contact\SendContactEmail;
use App\Models\Data\Contact as ContactData;
use Illuminate\Http\RedirectResponse;
use Illuminate\Pipeline\Pipeline;
use Spatie\DiscordAlerts\Facades\DiscordAlert;

class ContactController extends Controller
{
    public function __invoke(ContactData $request): RedirectResponse
    {
        $data = ContactData::from($request->all());

        app(Pipeline::class)
            ->send($data)
            ->through([
                CreateContact::class,
                SendContactEmail::class,
            ])
            ->then(
                fn () =>
                    DiscordAlert::message(sprintf('%s has reached out to you via the contact form: %s', $data->name, $data->message))
            );

        return redirect(CreateContact::redirectTo());
    }
}
