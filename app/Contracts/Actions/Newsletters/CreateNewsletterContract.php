<?php

namespace App\Contracts\Actions\Newsletters;

use App\Dto\Newsletter as NewsletterData;
use App\Models\Newsletter;

interface CreateNewsletterContract
{
    public function create(NewsletterData $data): Newsletter;
}
