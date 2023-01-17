<?php

namespace App\Contracts\Actions\Contact;

use App\Models\Contact;

interface SendContactEmailContract
{

    public function send(string $email): Contact;
}
