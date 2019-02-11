<?php

use Illuminate\Database\Seeder;

class TagsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        factory(\App\Models\Tag::class)->create([
            'name' => "Web Application",
        ]);

        factory(\App\Models\Tag::class)->create([
            'name' => "Vue",
        ]);

        factory(\App\Models\Tag::class)->create([
            'name' => "Firebase",
        ]);

        factory(\App\Models\Tag::class)->create([
            'name' => "VueFire",
        ]);

        factory(\App\Models\Tag::class)->create([
            'name' => "Tailwind.css",
        ]);
    }
}
