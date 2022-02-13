<?php

namespace App\Services\FileManager\Contracts;

use App\Services\FileManager\Models\Disk;

interface Fileable
{
    /**
     * Create a Disk for storage
     *
     * @return Disk
     */
    public function create(): Fileable;
}
