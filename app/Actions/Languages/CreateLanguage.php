<?php

namespace App\Actions\Languages;

use App\Contracts\Actions\Languages\CreateLanguageContract;
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
    public function create(array $data): Language
    {
        return Language::create(
            [
                'name' => $data['name'],
                'description' => $data['description'],
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
