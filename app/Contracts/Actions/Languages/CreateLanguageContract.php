<?php

namespace App\Contracts\Actions\Languages;

use App\Models\Language;

interface CreateLanguageContract
{
    /**
     * Delete the given user.
     *
     * @param  mixed  $user
     * @return void
     */
    public function create(array $data): Language;
}
