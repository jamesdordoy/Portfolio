<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

class PostFactory extends Factory
{
    public function definition(): array
    {
        return [
            'title' => $this->faker->name,
            'subtitle' => $this->faker->name,
            'body' => $this->faker->paragraphs(rand(1, 4), true),
        ];
    }
}
