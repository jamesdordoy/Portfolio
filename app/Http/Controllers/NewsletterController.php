<?php

namespace App\Http\Controllers;

use App\Actions\Newsletter\CreateNewsletter;
use App\Dto\Newsletter as NewsletterData;
use App\Models\Newsletter;
use Illuminate\Http\RedirectResponse;
use Illuminate\Pipeline\Pipeline;
use Spatie\DiscordAlerts\Facades\DiscordAlert;

final class NewsletterController
{
    public function store(NewsletterData $request): RedirectResponse
    {
        app(Pipeline::class)
            ->send(
                NewsletterData::from($request->all())
            )
            ->through([
                CreateNewsletter::class,
            ])
            ->then(
                fn(Newsletter $newsletter) => DiscordAlert::message(sprintf('%s has signed up the the newsletter', $newsletter->email))
            );

        return redirect(CreateNewsletter::redirectTo());
    }
}
