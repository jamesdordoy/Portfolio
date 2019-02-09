<?php

namespace App\Models;

class Tag extends EloquentModel
{
    /**
     * Get all of the posts that are assigned this tag.
     */
    public function projects()
    {
        return $this->morphedByMany(Project::class, 'taggables');
    }
}
