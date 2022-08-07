<?php

namespace App\Actions\Languages;

use App\Contracts\Actions\Languages\DeleteLanguageContract;
use App\Models\Language;
use App\Models\Tag;

/**
 * Class DeleteLanguage
 */
class DeleteLanguage implements DeleteLanguageContract
{
    /**
     * @param  Language  $langauge
     * @return bool
     */
    public function delete(Language $langauge): bool
    {
        // dd($langauge->tags);

        $tags = Tag::where('taggable_type', Language::class)
            ->where('taggable_id', $langauge->id)
            ->get();

        foreach ($tags as $tag) {
            foreach ($tag->taggable() as $tagLink) {
                $tagLink->delete();
            }

            $tag->delete();
        }

        return true;

        //return $langauge->delete();
    }

    /**
     * @return string
     */
    public function redirectTo()
    {
        return route('languages');
    }
}
