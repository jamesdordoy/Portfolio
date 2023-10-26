<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

class TimelineEventFactory extends Factory
{
    public function definition(): array
    {
        return [
            'name' => $this->faker->name,
            'body' => $this->faker->text,
            'icon' => $this->faker->name,
            'title' => $this->faker->name,
        ];
    }
}
