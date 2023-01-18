<?php

namespace App\Contracts\Actions\Contact;

use App\Models\Contact;

interface CreateContactContract
{
    public function create(array $data): Contact;
}
