<?php

namespace App\Services\FileManager;

use App\Services\FileManager\Contracts\Diskable;
use App\Services\FileManager\Models\File;
use App\Services\FileManager\Models\Folder;
use Exception;
use Illuminate\Contracts\Filesystem\Filesystem;
use Illuminate\Support\Facades\Storage;
use SplFileInfo;

class FileService implements Filesystem
{
    protected Filesystem $disk;

    protected $directorySeperator = DIRECTORY_SEPARATOR;

    public function __construct(protected Diskable $fileDisk)
    {
        $this->disk = Storage::disk($fileDisk->getType()->value);
    }

    public function exists($path)
    {
        return $this->disk->exists($path);
    }

    public function get($path)
    {
        return $this->disk->get($path);
    }

    public function readStream($path)
    {
        return $this->disk->readStream($path);
    }

    public function put($path, $contents, $options = [])
    {
        return $this->disk->put($path, $contents, $options);
    }

    public function write($path, SplFileInfo $file, $folder = null, $options = [])
    {
        if ($folder) {
            $path = $folder->makePath($path);
        }

        return $this->disk->put($path, file_get_contents($file), $options);
    }

    public function writeStream($path, $resource, array $options = [])
    {
        return $this->disk->writeStream($path, $resource, $options);
    }

    public function updateStream($path, $resource, array $options = [])
    {
        return $this->disk->writeStream($path, $resource, $options);
    }

    public function getVisibility($path)
    {
        return $this->disk->getVisibility($path);
    }

    public function setVisibility($path, $visibility)
    {
        return $this->disk->setVisibility($path, $visibility);
    }

    public function prepend($path, $data)
    {
        return $this->disk->prepend($path, $data);
    }

    public function append($path, $data)
    {
        return $this->disk->append($path, $data);
    }

    public function delete($paths)
    {
        return $this->disk->delete($paths);
    }

    public function copy($from, $to)
    {
        return $this->disk->copy($from, $to);
    }

    public function move($from, $to)
    {
        return $this->disk->move($from, $to);
    }

    public function size($path)
    {
        return $this->disk->size($path);
    }

    public function lastModified($path)
    {
        return $this->disk->lastModified($path);
    }

    public function files($directory = null, $recursive = false)
    {
        return $this->disk->files($directory, $recursive);
    }

    public function allFiles($directory = null)
    {
        return $this->disk->allFiles($directory);
    }

    public function directories($directory = null, $recursive = false)
    {
        return $this->disk->directories($directory, $recursive);
    }

    public function allDirectories($directory = null)
    {
        return $this->disk->allDirectories($directory);
    }

    public function makeDirectory($name)
    {
        $fullPath = sprintf("%s{$this->directorySeperator}%s", $this->fileDisk->getRoot(), $name);

        $folder = Folder::firstOrNew(
            ['root' => $fullPath],
        );

        $folder->name = $name;
        $folder->handle = $name;

        try {
            if ($folder->save() && $this->disk->makeDirectory($fullPath)) {
                $this->fileDisk->folders()->syncWithoutDetaching($folder);

                return $folder;
            }
        } catch (Exception $exception) {
            //handle
            return $folder;
        }
    }

    public function deleteDirectory($name)
    {
        $fullPath = sprintf("%s{$this->directorySeperator}%s", $this->fileDisk->getRoot(), $name);

        $folder = $this->fileDisk->folders()->where('root', $fullPath)->first();

        try {
            if ($folder->delete() && $this->disk->deleteDirectory($fullPath)) {
                $this->fileDisk->folders()->detach($folder);

                return $folder;
            }
        } catch (Exception $exception) {
            //handle
            throw $exception;
        }
    }

    public function importFromDirectoryRecursive($directory = null)
    {
        foreach ($this->directories($directory) as $dir) {
            $this->makeDirectory($dir);
            $this->importFromDirectoryRecursive($dir);
        }

        $files = [];

        if ($directory !== $this->directorySeperator) {
            $folder = Folder::where('name', $directory)->first();

            foreach ($this->files($directory) as $file) {
                $files[] = $this->getOrCreateFileFromPath($file, $folder);
            }
        }

        return $files;
    }

    public function getDisk()
    {
    }

    public function getFileFromPath($path)
    {
        $resourceIdentifier = $this->getRemoteResourceIdentifierFromPath(
            $path
        );

        return File::query()
            ->where('file_disk_id', $this->fileDisk->id)
            ->where('resource_identifier', $resourceIdentifier)
            ->first();
    }

    public function getOrCreateFileFromPath($path, Folder $folder): File
    {
        $name = pathinfo($path, PATHINFO_FILENAME);
        $extension = pathinfo($path, PATHINFO_EXTENSION);

        return File::query()->firstOrCreate([
            'disk_id' => $folder->disk->id,
            'folder_id' => $folder->id,
            'name' => $name,
            'extension' => $extension,
        ]);
    }
}
