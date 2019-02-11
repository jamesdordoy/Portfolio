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

        factory(\App\Models\Project::class)->create([
            'name' => "Shopping Application",
            'description' => "VueFire SPA, Vue Cli 3, Tailwind.css.",
            'owner' => "Me",
            'icon' => "/images/me.jpeg",
            'link' => "https://shopping.jamesdordoy.co.uk",
            "private" => 0,
        ]);
    }
}
