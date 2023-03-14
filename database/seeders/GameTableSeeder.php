<?php

namespace Database\Seeders;

use App\Models\Game;
use Illuminate\Database\Seeder;

class GameTableSeeder extends Seeder
{
    public function run(): void
    {
        Game::factory()->create(
            [
                'name' => 'Halo Infinite',
                'description' => 'Xbox flagship arena shooter',
                'icon' => '/storage/images/games/halo.svg',
                'link' => 'https://www.halowaypoint.com',
            ]
        );

        Game::factory()->create(
            [
                'name' => 'Destiny 2',
                'description' => 'Space MMO shooter',
                'icon' => '/storage/images/games/destiny.png',
                'link' => 'https://www.bungie.net',
            ]
        );

        Game::factory()->create(
            [
                'name' => 'Overwatch 2',
                'description' => 'PC arena shooter',
                'icon' => '/storage/images/games/overwatch.svg',
                'link' => 'https://overwatch.blizzard.com',
            ]
        );

        Game::factory()->create(
            [
                'name' => 'Fortnite',
                'description' => 'PC shooter',
                'icon' => '/storage/images/games/overwatch.svg',
                'link' => 'https://www.fortnite.com/',
            ]
        );

        Game::factory()->create(
            [
                'name' => 'Dragon Ball Z Budakai 3',
                'description' => 'Xbox 360 arcade fighting game',
                'icon' => '/storage/images/games/overwatch.svg',
                'link' => 'https://www.fortnite.com/',
            ]
        );
    }
}
