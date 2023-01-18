<?php

namespace Database\Seeders;

use App\Models\Tag;
use Illuminate\Database\Seeder;

class TagTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Tag::factory()->create([
            'taggable_id' => 1,
            'taggable_type' => "App\Models\Language",
        ]);

        Tag::factory()->create([
            'taggable_id' => 2,
            'taggable_type' => "App\Models\Language",
        ]);

        Tag::factory()->create([
            'taggable_id' => 3,
            'taggable_type' => "App\Models\Language",
        ]);

        Tag::factory()->create([
            'taggable_id' => 4,
            'taggable_type' => "App\Models\Language",
        ]);

        Tag::factory()->create([
            'taggable_id' => 5,
            'taggable_type' => "App\Models\Language",
        ]);

        Tag::factory()->create([
            'taggable_id' => 6,
            'taggable_type' => "App\Models\Language",
        ]);

        Tag::factory()->create([
            'taggable_id' => 7,
            'taggable_type' => "App\Models\Language",
        ]);

        Tag::factory()->create([
            'taggable_id' => 8,
            'taggable_type' => "App\Models\Language",
        ]);

        Tag::factory()->create([
            'taggable_id' => 9,
            'taggable_type' => "App\Models\Language",
        ]);

        Tag::factory()->create([
            'taggable_id' => 10,
            'taggable_type' => "App\Models\Language",
        ]);
    }
}
