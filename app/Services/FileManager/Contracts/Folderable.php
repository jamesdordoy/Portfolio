<?php

namespace App\Services\FileManager\Contracts;

use SplFileObject;
use App\Services\FileManager\Models\Enums\DiskTypes;
use App\Services\FileManager\Models\File;
use App\Services\FileManager\Models\Folder;

interface Folderable
{
    /**
     * Create a File in storage
     *
     * @return File
     */
    public function createFile(SplFileObject $file): File;
}
