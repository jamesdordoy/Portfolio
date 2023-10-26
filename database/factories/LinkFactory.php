<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

class LinkFactory extends Factory
{
    public function definition(): array
    {
        return [
            'name' => $this->faker->name,
            'link' => $this->faker->domainName,
        ];
    }
}
