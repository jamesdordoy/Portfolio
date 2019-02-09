<?php

namespace App\Traits;

use App\Models\Tag;

trait Taggable {

    /**
    * Get all of the Tags for the Project.
    */
    public function tags()
    {
        return $this->morphToMany(Tag::class, 'taggables');
    }
}
