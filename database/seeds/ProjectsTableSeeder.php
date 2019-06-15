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
        factory(\App\Models\Project::class)->create(
            [
                'name' => "Portfolio",
                'description' => "My Website Portfolio",
                'owner' => "Me",
                'link' => "https://www.jamesdordoy.co.uk",
            ]
        );

        factory(\App\Models\Project::class)->create(
            [
                'name' => "Shopping Application",
                'description' => "VueFire SPA, Vue Cli 3, Tailwind.css.",
                'owner' => "Me",
                'icon' => "/images/projects/simple-shopping.png",
                'link' => "https://shopping.jamesdordoy.co.uk",
                "private" => 0,
            ]
        );

        factory(\App\Models\Project::class)->create(
            [
                'name' => "Laravel Vue Datatables",
                'description' => "A Vue.js datatable component for Laravel that works with Bootstrap.",
                'owner' => "Me",
                'icon' => "/images/projects/bootstrap-datatable.png",
                'link' => "https://jamesdordoy.github.io/vue-datatable/",
                "private" => 0,
            ]
        );
    }
}
