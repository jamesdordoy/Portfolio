<?php

namespace App\Actions\Newsletter;

use App\Contracts\Actions\Newsletters\CreateNewsletterContract;
use App\Models\Data\Newsletter as NewsletterData;
use App\Models\Newsletter;

class CreateNewsletter implements CreateNewsletterContract
{
    public function create(NewsletterData $data): Newsletter
    {
        return Newsletter::create(
            [
                'email' => $data->email,
            ]
        );
    }

    public function redirectTo(): string
    {
        return route('home');
    }
}
