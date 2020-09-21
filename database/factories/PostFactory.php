<?php

namespace Database\Factories;

use App\Models\Post;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

class PostFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Post::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'user_id'  => User::factory()->create()->id,
            'title'    => $this->faker->name,
            'subtitle' => $this->faker->name,
            'body'     => $this->faker->paragraphs(rand(1, 4), true),
        ];
    }
}
