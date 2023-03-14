<?php

namespace Database\Factories;

use App\Models\Tag;
use Illuminate\Database\Eloquent\Factories\Factory;

class TagFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Tag::class;

    public function definition(): array
    {
        return [
            'taggable_id' => $this->faker->name,
            'taggable_type' => $this->faker->name,
        ];
    }
}
