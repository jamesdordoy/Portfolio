<?php

namespace App\Actions\Newsletter;

use App\Models\Data\Newsletter as NewsletterData;
use App\Models\Newsletter;
use Closure;

class CreateNewsletter
{
    public function handle(NewsletterData $data, Closure $next)
    {
        $newsletter = Newsletter::create(
            [
                'email' => $data->email,
            ]
        );

        return $next($newsletter);
    }

    public static function redirectTo(): string
    {
        return route('home');
    }
}
