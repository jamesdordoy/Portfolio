<?php

namespace Database\Seeders;

use App\Models\GameClip;
use Illuminate\Database\Seeder;

class GameClipTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
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
