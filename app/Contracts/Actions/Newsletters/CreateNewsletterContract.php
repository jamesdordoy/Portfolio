<?php

namespace App\Contracts\Actions\Newsletters;

use App\Models\Newsletter;
use App\Models\Data\Newsletter as NewsletterData;

interface CreateNewsletterContract
{
    public function create(NewsletterData $data): Newsletter;
}
