<?php

use Illuminate\Database\Seeder;

class ProjectsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        factory(\App\Models\Project::class)->create([
            'name' => "Portfolio",
            'description' => "My Website Portfolio",
            'owner' => "Me",
            'link' => "https://www.jamesdordoy.co.uk",
        ]);
    }
}
