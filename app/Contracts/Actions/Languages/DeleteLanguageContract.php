<?php

namespace App\Contracts\Actions\Languages;

use App\Models\Language;

interface DeleteLanguageContract
{
    /**
     * Delete the given user.
     *
     * @param  mixed  $user
     * @return void
     */
    public function delete(Language $language): bool;
}
