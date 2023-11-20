<?php

namespace App\Contracts\Actions\Languages;

use App\Models\Data\Language as LanguageData;
use App\Models\Language;

interface CreateLanguageContract
{
    public function create(LanguageData $data): Language;
}
