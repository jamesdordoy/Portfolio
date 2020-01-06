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
            'name' => "Web App",
        ]);

        factory(\App\Models\Tag::class)->create([
            'name' => "Vue.js",
        ]);

        factory(\App\Models\Tag::class)->create([
            'name' => "Laravel",
        ]);

        factory(\App\Models\Tag::class)->create([
            'name' => "Bootstrap",
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

        factory(\App\Models\Tag::class)->create([
            'name' => "PHP",
        ]);

        factory(\App\Models\Tag::class)->create([
            'name' => "Node.js",
        ]);

        factory(\App\Models\Tag::class)->create([
            'name' => "Angularjs",
        ]);

        factory(\App\Models\Tag::class)->create([
            'name' => "Package",
        ]);
    }
}
