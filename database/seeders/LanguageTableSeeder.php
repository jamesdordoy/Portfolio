<?php

namespace Database\Seeders;

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
            'name'        => 'PHP',
            'description' => 'PHP',
        ]);

        Language::factory()->create([
            'name'        => 'Laravel',
            'description' => 'PHP',
        ]);

        Language::factory()->create([
            'name' => 'Web App',
            'description' => 'PHP',
        ]);

        Language::factory()->create([
            'name' => 'Vue.js',
            'description' => 'PHP',
        ]);

        Language::factory()->create([
            'name' => 'Bootstrap',
            'description' => 'PHP',
        ]);

        Language::factory()->create([
            'name' => 'Firebase',
            'description' => 'PHP',
        ]);
        
        Language::factory()->create([
            'name' => 'VueFire',
            'description' => 'PHP',
        ]);

        Language::factory()->create([
            'name' => 'Node.js',
            'description' => 'PHP',
        ]);

        Language::factory()->create([
            'name' => 'Angularjs',
            'description' => 'PHP',
        ]);

        Language::factory()->create([
            'name' => 'Package',
            'description' => 'PHP',
        ]);
    }
}
