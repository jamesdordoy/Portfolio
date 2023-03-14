<?php

namespace Database\Seeders;

use App\Models\GameClip;
use Illuminate\Database\Seeder;

class GameClipTableSeeder extends Seeder
{
    public function run(): void
    {
        GameClip::factory()->create(
            [
                'game_id' => 4,
                'url' => 'https://www.youtube.com/embed/0SoyVjFvkO4',
            ]
        );

        GameClip::factory()->create(
            [
                'game_id' => 5,
                'url' => 'https://www.youtube.com/embed/YVNxSDAZLAE',
            ]
        );
    }
}
