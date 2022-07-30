<?php

namespace App\Services\FileManager\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Services\FileManager\Contracts\Folderable;
use App\Services\FileManager\FileService;
use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Support\Str;
use SplFileObject;

class Folder extends Model implements Folderable
{
    use HasFactory;

    protected $fillable = ['name', 'handle', 'root'];

    public function disk()
    {
        return $this->morphOne(Disk::class, 'diskable');
    }

    public function parent()
    {
        return $this->belongsTo($this, 'parent_id');
    }

    public function children()
    {
        return $this->hasMany($this, 'parent_id');
    }

    public function allChildren()
    {
        return $this->children()->with(['allChildren']);
    }

    public function files()
    {
        return $this->hasMany(File::class);
    }

    public function createFile(SplFileObject $file): File
    {
        $service = new FileService($this->fileDisk);
    }

    public function handle(): Attribute
    {
        return new Attribute(
            set: fn ($value) => Str::slug($value),
        );
    }

    public function makePath($path)
    {
    }
}
