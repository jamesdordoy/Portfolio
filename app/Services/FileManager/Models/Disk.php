<?php

namespace App\Services\FileManager\Models;

use SplFileObject;
use App\Services\FileManager\Contracts\Diskable;
use App\Services\FileManager\Models\Enums\DiskTypes;
use App\Services\FileManager\FileService;
use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;
use Illuminate\Database\Eloquent\Relations\MorphToMany;

class Disk extends Model implements Diskable
{
    use HasFactory;

    public function files(): MorphToMany
    {
        return $this->morphedByMany(File::class, 'diskable');
    }

    public function folders(): MorphToMany
    {
        return $this->morphedByMany(Folder::class, 'diskable');
    }

    public function createFolder(string $name): Folder
    {
        $service = app(FileService::class, [$this]);
        
        return $service->makeDirectory($name);
    }

    public function createFile(SplFileObject $file): File
    {
        return new File;
    }

    public function getType(): DiskTypes
    {
        return DiskTypes::Local;
    }

    public function getRoot(): string
    {
        return $this->root;
    }

    public function handle(): Attribute
    {
        return new Attribute(
            set: fn ($value) => Str::slug($value),
        );
    }
}
