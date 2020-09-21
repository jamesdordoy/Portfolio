<?php

namespace App\Contracts\Services;

use App\Models\Contact;

interface ContactServiceContract
{
    public function sendContactMeEmail(Contact $contact);

    public function sendLetMeKnowEmail(Contact $contact);
}
