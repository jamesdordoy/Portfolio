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
            ]
        );

        $project = factory(\App\Models\Project::class)->create(
            [
                'name' => "Laravel Vue Datatables",
                'description' => "A Vue.js datatable component for Laravel that works with Bootstrap.",
                'owner' => "Me",
                'icon' => "/images/projects/bootstrap-datatable.png",
                'link' => "https://github.com/jamesdordoy/laravel-vue-datatable",
                "private" => 0,
            ]
        );

        DB::table('taggables')->insert([
            'tag_id' => 2,
            'taggables_id' => $project->id,
            'taggables_type' => 'App\Models\Project',
        ]);

        DB::table('taggables')->insert([
            'tag_id' => 3,
            'taggables_id' => $project->id,
            'taggables_type' => 'App\Models\Project',
        ]);

        DB::table('taggables')->insert([
            'tag_id' => 4,
            'taggables_id' => $project->id,
            'taggables_type' => 'App\Models\Project',
        ]);

        DB::table('taggables')->insert([
            'tag_id' => 11,
            'taggables_id' => $project->id,
            'taggables_type' => 'App\Models\Project',
        ]);


        $phpForwardChaining = factory(\App\Models\Project::class)->create(
            [
                'name' => "PHP Forward Chaining Engine",
                'description' => "A simple Forward Chaining Engine written in PHP and makes use of the Symfony expressions language",
                'owner' => "Me",
                'icon' => "/images/projects/PHPBinaryTree.png",
                'link' => "https://github.com/jamesdordoy/PHP-Forward-Chaining",
                "private" => 0,
            ]
        );

        DB::table('taggables')->insert([
            'tag_id' => 8,
            'taggables_id' => $phpForwardChaining->id,
            'taggables_type' => 'App\Models\Project',
        ]);

        DB::table('taggables')->insert([
            'tag_id' => 11,
            'taggables_id' => $phpForwardChaining->id,
            'taggables_type' => 'App\Models\Project',
        ]);

        $pointsOfInterestMappingApp = factory(\App\Models\Project::class)->create(
            [
                'name' => "Points of Interest",
                'description' => "A JavaScript frontend mapping app with a PHP and Node.JS backend made while attending University.",
                'owner' => "Me",
                'icon' => "/images/projects/PointsofInterest.png",
                'link' => "",
                "private" => 0,
            ]
        );

        DB::table('taggables')->insert([
            'tag_id' => 1,
            'taggables_id' => $pointsOfInterestMappingApp->id,
            'taggables_type' => 'App\Models\Project',
        ]);

        DB::table('taggables')->insert([
            'tag_id' => 8,
            'taggables_id' => $pointsOfInterestMappingApp->id,
            'taggables_type' => 'App\Models\Project',
        ]);

        DB::table('taggables')->insert([
            'tag_id' => 9,
            'taggables_id' => $pointsOfInterestMappingApp->id,
            'taggables_type' => 'App\Models\Project',
        ]);

        DB::table('taggables')->insert([
            'tag_id' => 10,
            'taggables_id' => $pointsOfInterestMappingApp->id,
            'taggables_type' => 'App\Models\Project',
        ]);
    }
}
