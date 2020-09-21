<?php

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
            'name' => 'Web App',
        ]);

        Tag::factory()->create([
            'name' => 'Vue.js',
        ]);

        Tag::factory()->create([
            'name' => 'Laravel',
        ]);

        Tag::factory()->create([
            'name' => 'Bootstrap',
        ]);

        Tag::factory()->create([
            'name' => 'Firebase',
        ]);

        Tag::factory()->create([
            'name' => 'VueFire',
        ]);

        Tag::factory()->create([
            'name' => 'Tailwind.css',
        ]);

        Tag::factory()->create([
            'name' => 'PHP',
        ]);

        Tag::factory()->create([
            'name' => 'Node.js',
        ]);

        Tag::factory()->create([
            'name' => 'Angularjs',
        ]);

        Tag::factory()->create([
            'name' => 'Package',
        ]);
    }
}
