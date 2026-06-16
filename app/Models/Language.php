<?php

declare(strict_types=1);

namespace App\Models;

use Database\Factories\LanguageFactory;
use Illuminate\Database\Eloquent\Attributes\Scope;
use Illuminate\Database\Eloquent\Attributes\UseFactory;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\MorphToMany;
use Illuminate\Support\Carbon;

/**
 * @property int $id
 * @property string $name
 * @property string $description
 * @property Carbon $created_at
 * @property Carbon $updated_at
 * @property-read Collection<int, Tag>   $tags
 *
 * @method static Builder<static> ordered()
 */
#[UseFactory(LanguageFactory::class)]
class Language extends EloquentModel
{
    /** @use HasFactory<LanguageFactory> */
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
     * @param  Builder<Language>  $query
     * @return Builder<Language>
     */
    #[Scope]
    protected function ordered(Builder $query): Builder
    {
        return $query->orderBy('id', 'asc');
    }
}
