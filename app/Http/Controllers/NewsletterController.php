<?php

namespace App\Http\Controllers;

use App\Actions\Newsletter\CreateNewsletter;
use App\Models\Data\Newsletter as NewsletterData;
use App\Models\Newsletter;
use Illuminate\Http\RedirectResponse;
use Illuminate\Pipeline\Pipeline;
use Spatie\DiscordAlerts\Facades\DiscordAlert;

class NewsletterController extends Controller
{
    public function store(NewsletterData $request): RedirectResponse
    {
        $data = NewsletterData::from($request->all());

        app(Pipeline::class)
            ->send($data)
            ->through([
                CreateNewsletter::class,
            ])
            ->then(function (Newsletter $newsletter) {
                DiscordAlert::message(sprintf('%s has signed up the the newsletter', $newsletter->email));
                return $newsletter;
            });

        return redirect(CreateNewsletter::redirectTo());
    }
}
