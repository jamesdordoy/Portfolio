<?php

namespace Database\Factories;

use App\Models\Post;
use Illuminate\Database\Eloquent\Factories\Factory;

class PostFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Post::class;

    public function definition(): array
    {
        return [
            'title' => $this->faker->name,
            'subtitle' => $this->faker->name,
            'body' => $this->faker->paragraphs(rand(1, 4), true),
        ];
    }
}
