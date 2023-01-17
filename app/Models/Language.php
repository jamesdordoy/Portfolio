<?php

namespace App\Models;

use App\Traits\HasTags;
use App\Contracts\Traits\Taggable;
use Illuminate\Database\Eloquent\Factories\HasFactory;

/**
 * Class Language.
 */
class Language extends EloquentModel implements Taggable
{
    use HasFactory;
    use HasTags;


    /**
     * @return \Illuminate\Database\Eloquent\Relations\MorphOne
     */
    public function image()
    {
        return $this->morphOne(Asset::class, 'assetable');
    }

    /**
     * @param $query
     * @return mixed
     */
    public function scopeOrdered($query)
    {
        return $query->orderBy('id', 'ASC');
    }
}
