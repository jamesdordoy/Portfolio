<?php

namespace App\Models;

class Tag extends EloquentModel
{
    /**
     * Get all of the Projects that are assigned this Tag.
     */
    public function projects()
    {
        return $this->morphedByMany(Project::class, 'taggables');
    }

    /**
     * Get all of the Languages that are assigned this Tag.
     */
    public function languages()
    {
        return $this->morphedByMany(Language::class, 'taggables');
    }
}
