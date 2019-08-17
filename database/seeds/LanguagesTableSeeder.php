<?php

use Illuminate\Database\Seeder;

class LanguagesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        factory(App\Models\Language::class)->create([
            'name' => "PHP",
            'description' => "PHP",
        ]);

        factory(App\Models\Language::class)->create([
            'name' => "Laravel",
            'description' => "PHP",
        ]);

        
    }
}
