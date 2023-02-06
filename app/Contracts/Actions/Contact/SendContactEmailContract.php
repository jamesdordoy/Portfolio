<?php

namespace App\Contracts\Actions\Contact;

use App\Models\Contact;
use Closure;

interface SendContactEmailContract
{
    public function handle(Contact $contact, Closure $next): Closure;
}
