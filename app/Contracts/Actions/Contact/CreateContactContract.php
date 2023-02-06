<?php

namespace App\Contracts\Actions\Contact;

use Closure;
use App\Models\Data\Contact as ContactData;

interface CreateContactContract
{
    public function handle(ContactData $data, Closure $next): Closure;
}
