<?php

namespace App\Services\FileManager\Contracts;

use App\Services\FileManager\Models\Enums\DiskTypes;
use App\Services\FileManager\Models\File;
use App\Services\FileManager\Models\Folder;
use Illuminate\Database\Eloquent\Relations\MorphToMany;
use SplFileObject;

interface Diskable
{
    /**
     * Get disk type
     *
     * @return DiskTypes
     */
    public function getType(): DiskTypes;

    /**
     * Get disk root
     *
     * @return string
     */
    public function getRoot(): string;

    /**
     * Create a Folder in storage
     *
     * @return Folder
     */
    public function createFolder(string $name): Folder;

    /**
     * Create a File in storage
     *
     * @return File
     */
    public function createFile(SplFileObject $file): File;

    /**
     * Get folders
     *
     * @return MorphToMany
     */
    public function folders(): MorphToMany;
}
