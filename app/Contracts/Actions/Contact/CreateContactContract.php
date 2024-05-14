<?php

namespace App\Contracts\Actions\Contact;

use App\Dto\Contact as ContactData;
use Closure;

interface CreateContactContract
{
    public function handle(ContactData $data, Closure $next): Closure;
}
