<?php

declare(strict_types=1);

namespace App\Models;

use Database\Factories\ProjectFactory;
use Illuminate\Database\Eloquent\Attributes\Scope;
use Illuminate\Database\Eloquent\Attributes\UseFactory;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\MorphToMany;

/**
 * @property int                                                       $id
 * @property string                                                    $name
 * @property string                                                    $description
 * @property string                                                    $owner
 * @property string|null                                               $link
 * @property string|null                                               $icon
 * @property bool                                                      $complete
 * @property bool                                                      $private
 * @property \Illuminate\Support\Carbon                                $created_at
 * @property \Illuminate\Support\Carbon                                $updated_at
 * @property-read \Illuminate\Database\Eloquent\Collection<int, Tag>   $tags
 * @method static Builder<static> visible()
 */
#[UseFactory(ProjectFactory::class)]
class Project extends EloquentModel
{
    /** @use HasFactory<\Database\Factories\ProjectFactory> */
    use HasFactory;

    public const PUBLIC_RELATIONSHIPS = ['tags.taggable'];

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
     * @param Builder<Project> $query
     * @return Builder<Project>
     */
    #[Scope]
    protected function visible(Builder $query): Builder
    {
        return $query->where('private', 0)->with('tags')->latest();
    }
}
