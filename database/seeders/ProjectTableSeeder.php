<?php

namespace Database\Seeders;

use App\Models\Project;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ProjectTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Project::factory()->create(
            [
                'name' => 'Portfolio',
                'description' => 'My Website Portfolio',
                'owner' => 'Me',
                'link' => 'https://www.jamesdordoy.co.uk',
            ]
        );

        Project::factory()->create(
            [
                'name' => 'Shopping Application',
                'description' => 'VueFire SPA, Vue Cli 3, Tailwind.css.',
                'owner' => 'Me',
                'icon' => '/storage/images/projects/simple-shopping.png',
                'link' => 'https://shopping.jamesdordoy.co.uk',
            ]
        );

        $project = Project::factory()->create(
            [
                'name' => 'Laravel Vue Datatables',
                'description' => 'A Vue.js datatable component for Laravel that works with Bootstrap.',
                'owner' => 'Me',
                'icon' => '/storage/images/projects/bootstrap-datatable.png',
                'link' => 'https://github.com/jamesdordoy/laravel-vue-datatable',
                'private' => 0,
            ]
        );

        DB::table('taggables')->insert([
            'tag_id' => 1,
            'taggable_id' => $project->id,
            'taggable_type' => 'App\Models\Project',
        ]);

        DB::table('taggables')->insert([
            'tag_id' => 2,
            'taggable_id' => $project->id,
            'taggable_type' => 'App\Models\Project',
        ]);

        DB::table('taggables')->insert([
            'tag_id' => 4,
            'taggable_id' => $project->id,
            'taggable_type' => 'App\Models\Project',
        ]);

        DB::table('taggables')->insert([
            'tag_id' => 5,
            'taggable_id' => $project->id,
            'taggable_type' => 'App\Models\Project',
        ]);

        DB::table('taggables')->insert([
            'tag_id' => 10,
            'taggable_id' => $project->id,
            'taggable_type' => 'App\Models\Project',
        ]);

        $phpForwardChaining = Project::factory()->create(
            [
                'name' => 'PHP Forward Chaining Engine',
                'description' => 'A simple Forward Chaining Engine written in PHP and makes use of the Symfony expressions language',
                'owner' => 'Me',
                'icon' => '/storage/images/projects/PHPBinaryTree.png',
                'link' => 'https://github.com/jamesdordoy/PHP-Forward-Chaining',
                'private' => 0,
            ]
        );

        DB::table('taggables')->insert([
            'tag_id' => 1,
            'taggable_id' => $phpForwardChaining->id,
            'taggable_type' => 'App\Models\Project',
        ]);

        DB::table('taggables')->insert([
            'tag_id' => 10,
            'taggable_id' => $phpForwardChaining->id,
            'taggable_type' => 'App\Models\Project',
        ]);

        $pointsOfInterestMappingApp = Project::factory()->create(
            [
                'name' => 'Points of Interest',
                'description' => 'A JavaScript frontend mapping app with a PHP and Node.JS backend made while attending University.',
                'owner' => 'Me',
                'icon' => '/storage/images/projects/PointsofInterest.png',
                'link' => '',
                'private' => 0,
            ]
        );

        DB::table('taggables')->insert([
            'tag_id' => 1,
            'taggable_id' => $pointsOfInterestMappingApp->id,
            'taggable_type' => 'App\Models\Project',
        ]);

        DB::table('taggables')->insert([
            'tag_id' => 3,
            'taggable_id' => $pointsOfInterestMappingApp->id,
            'taggable_type' => 'App\Models\Project',
        ]);

        DB::table('taggables')->insert([
            'tag_id' => 5,
            'taggable_id' => $pointsOfInterestMappingApp->id,
            'taggable_type' => 'App\Models\Project',
        ]);

        DB::table('taggables')->insert([
            'tag_id' => 8,
            'taggable_id' => $pointsOfInterestMappingApp->id,
            'taggable_type' => 'App\Models\Project',
        ]);

        DB::table('taggables')->insert([
            'tag_id' => 9,
            'taggable_id' => $pointsOfInterestMappingApp->id,
            'taggable_type' => 'App\Models\Project',
        ]);
    }
}
