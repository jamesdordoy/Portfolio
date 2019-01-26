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
            'icon' => "https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/PHP-logo.svg/2000px-PHP-logo.svg.png",
        ]);

        factory(App\Models\Language::class)->create([
            'name' => "Laravel",
            'description' => "PHP",
            'icon' => "https://upload.wikimedia.org/wikipedia/commons/3/3d/LaravelLogo.png",
        ]);

        
    }
}
