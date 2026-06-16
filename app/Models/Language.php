<?php

declare(strict_types=1);

namespace App\Models;

use Database\Factories\LanguageFactory;
use Illuminate\Database\Eloquent\Attributes\Scope;
use Illuminate\Database\Eloquent\Attributes\UseFactory;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\MorphToMany;

/**
 * @property int                                                       $id
 * @property string                                                    $name
 * @property string                                                    $description
 * @property \Illuminate\Support\Carbon                                $created_at
 * @property \Illuminate\Support\Carbon                                $updated_at
 * @property-read \Illuminate\Database\Eloquent\Collection<int, Tag>   $tags
 * @method static Builder<static> ordered()
 */
#[UseFactory(LanguageFactory::class)]
class Language extends EloquentModel
{
    /** @use HasFactory<\Database\Factories\LanguageFactory> */
    use HasFactory;

    protected $casts = [
        'created_at' => 'datetime',
        'updated_at' => 'datetime',
    ];

    /** @return MorphToMany<Tag, $this> */
    public function tags(): MorphToMany
    {
        return $this->morphToMany(Tag::class, 'taggable');
    }

    /**
     * @param Builder<Language> $query
     * @return Builder<Language>
     */
    #[Scope]
    protected function ordered(Builder $query): Builder
    {
        return $query->orderBy('id', 'asc');
    }
}
