<?php

namespace App\Actions\Languages;

use App\Contracts\Actions\Languages\CreateLanguageContract;
use App\Models\Data\Language as LanguageData;
use App\Models\Language;

class CreateLanguage implements CreateLanguageContract
{
    public function create(LanguageData $data): Language
    {
        return Language::create(
            [
                'name' => $data->name,
                'description' => $data->description,
            ]
        );
    }

    public function redirectTo(): string
    {
        return route('home');
    }
}
