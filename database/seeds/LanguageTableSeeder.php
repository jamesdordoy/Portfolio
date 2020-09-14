<?php

use App\Models\Language;
use Illuminate\Database\Seeder;

class LanguageTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Language::factory()->create([
            'name' => "PHP",
            'description' => "PHP",
        ]);

        Language::factory()->create([
            'name' => "Laravel",
            'description' => "PHP",
        ]);


    }
}
