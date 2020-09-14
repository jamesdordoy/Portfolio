<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;

class Asset extends EloquentModel
{
    use HasFactory;

    public function assetable()
    {
        return $this->morphTo();
    }
}
