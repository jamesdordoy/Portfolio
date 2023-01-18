<?php

namespace App\Contracts\Actions\Languages;

use App\Models\Language;

interface DeleteLanguageContract
{
    public function delete(Language $language): bool;
}
