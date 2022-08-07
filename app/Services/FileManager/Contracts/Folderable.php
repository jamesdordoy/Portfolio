<?php

namespace App\Services\FileManager\Contracts;

use App\Services\FileManager\Models\File;
use SplFileObject;

interface Folderable
{
    /**
     * Create a File in storage
     *
     * @return File
     */
    public function createFile(SplFileObject $file): File;
}
