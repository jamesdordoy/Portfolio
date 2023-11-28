<?php

namespace App\Actions\Newsletter;

use App\Models\Data\Newsletter as NewsletterData;
use App\Models\Newsletter;
use Closure;

class CreateNewsletter
{
    public function __invoke(NewsletterData $data): Newsletter
    {
        return $this->handle($data, fn(Newsletter $newsletter) => $newsletter);
    }

    public function handle(NewsletterData $data, Closure $next)
    {
        return tap(
            Newsletter::create($data->all()),
            fn(Newsletter $newsletter) => $next($newsletter)
        );
    }

    public static function redirectTo(): string
    {
        return route('home');
    }
}
