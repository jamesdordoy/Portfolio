<?php

namespace App\Services\FileManager\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;

class File extends Model
{
    use HasFactory;

    public function disk()
    {
        return $this->morphOne(Disk::class, 'diskable');
    }

    public function folder()
    {
        return $this->belongsTo(Folder::class);
    }
 
    public function handle(): Attribute
    {
        return new Attribute(
            set: fn ($value) => Str::slug($value),
        );
    }
}
