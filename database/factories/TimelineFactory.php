<?php

namespace Database\Factories;

use App\Models\Timeline;
use Illuminate\Database\Eloquent\Factories\Factory;

class TimelineFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Timeline::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'name'  => $this->faker->name,
            'body'  => $this->faker->text,
            'icon'  => $this->faker->name,
            'title' => $this->faker->name,
        ];
    }
}
