<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;

/**
 * Class Tag
 * @package App\Models
 */
class Tag extends EloquentModel
{
    use HasFactory;

    /**
     * @return \Illuminate\Database\Eloquent\Relations\MorphTo
     */
    public function taggable()
    {
        return $this->morphTo();
    }

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
