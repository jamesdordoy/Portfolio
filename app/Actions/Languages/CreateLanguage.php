<?php

namespace App\Actions\Languages;

use App\Contracts\Actions\Languages\CreateLanguageContract;
use App\Models\Data\Language as LanguageData;
use App\Models\Language;

/**
 * Class CreateLanguage
 */
class CreateLanguage implements CreateLanguageContract
{
    /**
     * @param  array  $data
     * @return Language
     */
    public function create(LanguageData $data): Language
    {
        return Language::create(
            [
                'name' => $data->name,
                'description' => $data->description,
            ]
        );
    }

    /**
     * @return string
     */
    public function redirectTo(): string
    {
        return route('languages');
    }
}
