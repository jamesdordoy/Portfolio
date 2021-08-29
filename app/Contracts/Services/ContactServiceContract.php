<?php

namespace App\Contracts\Services;

use App\Models\Contact;
use App\Models\Newsletter;

interface ContactServiceContract
{
    public function store(array $data): Contact;

    public function storeNewsletter(string $email): Newsletter;

    public function unsubscribeFromNewsletter(Newsletter $newsletter): bool;

    public function sendContactMeEmail(Contact $contact): void;

    public function sendLetMeKnowEmail(Contact $contact): void;

    public function sendNewsLetterEmail(Newsletter $newsletter): void;
}
