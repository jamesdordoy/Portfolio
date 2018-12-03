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
            'name' => "HTML",
            'description' => "HyperText Markup Language",
            'icon' => "html.jpg",
        ]);
    }
}
