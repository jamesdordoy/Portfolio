<?php

namespace App\Models;

class Asset extends EloquentModel
{

    public function assetable()
    {
        return $this->morphTo();
    }
}
