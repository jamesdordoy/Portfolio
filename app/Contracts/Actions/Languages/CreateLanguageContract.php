<?php

namespace App\Contracts\Actions\Languages;

use App\Models\Language;
use App\Models\Data\Language as LanguageData;

interface CreateLanguageContract
{
    public function create(LanguageData $data): Language;
}
