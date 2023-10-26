<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

class TagFactory extends Factory
{
    public function definition(): array
    {
        return [
            'taggable_id' => $this->faker->name,
            'taggable_type' => $this->faker->name,
        ];
    }
}
