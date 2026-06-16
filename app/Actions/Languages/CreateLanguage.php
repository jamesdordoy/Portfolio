<?php

namespace App\Actions\Languages;

use App\Contracts\Actions\Languages\CreateLanguageContract;
use App\Data\Language as LanguageData;
use App\Models\Language;

class CreateLanguage implements CreateLanguageContract
{
    public function create(LanguageData $data): Language
    {
        return Language::create($data->toArray());
    }

    public function redirectTo(): string
    {
        return route('home');
    }
}
