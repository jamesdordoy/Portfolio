<?php

namespace Database\Factories;

use App\Models\Game;
use Illuminate\Database\Eloquent\Factories\Factory;

class GameClipFactory extends Factory
{
    public function definition(): array
    {
        return [
            'game_id' => fn() => Game::factory()->create()->id,
            'url' => $this->faker->url(),
        ];
    }
}
