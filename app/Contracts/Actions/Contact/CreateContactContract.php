<?php

namespace App\Contracts\Actions\Contact;

use App\Models\Data\Contact as ContactData;
use Closure;

interface CreateContactContract
{
    public function handle(ContactData $data, Closure $next): Closure;
}
