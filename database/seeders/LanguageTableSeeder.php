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
        Language::factory()->create(array(
            'name' => 'PHP',
            'description' => 'PHP',
        ));

        Language::factory()->create(array(
            'name' => 'Laravel',
            'description' => 'PHP',
        ));

        Language::factory()->create(array(
            'name' => 'Web App',
            'description' => 'PHP',
        ));

        Language::factory()->create(array(
            'name' => 'Vue.js',
            'description' => 'PHP',
        ));

        Language::factory()->create(array(
            'name' => 'Bootstrap',
            'description' => 'PHP',
        ));

        Language::factory()->create(array(
            'name' => 'Firebase',
            'description' => 'PHP',
        ));

        Language::factory()->create(array(
            'name' => 'VueFire',
            'description' => 'PHP',
        ));

        Language::factory()->create(array(
            'name' => 'Node.js',
            'description' => 'PHP',
        ));

        Language::factory()->create(array(
            'name' => 'Angularjs',
            'description' => 'PHP',
        ));

        Language::factory()->create(array(
            'name' => 'Package',
            'description' => 'PHP',
        ));
    }
}
