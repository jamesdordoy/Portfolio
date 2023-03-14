<?php

namespace Database\Factories;

use App\Models\Link;
use Illuminate\Database\Eloquent\Factories\Factory;

class LinkFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Link::class;

    public function definition(): array
    {
        return [
            'name' => $this->faker->name,
            'link' => $this->faker->domainName,
        ];
    }
}
