<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\MorphTo;

class Asset extends EloquentModel
{
    use HasFactory;

    public function assetable(): MorphTo
    {
        return $this->morphTo();
    }
}
