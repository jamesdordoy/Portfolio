<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $this->call(TagsTableSeeder::class);
        $this->call(UsersTableSeeder::class);
        $this->call(ProjectsTableSeeder::class);
        $this->call(LanguagesTableSeeder::class);
        $this->call(LinksTableSeeder::class);
        $this->call(TimelineTableSeeder::class);
        factory(\App\Models\Post::class, 20)->create();
    }
}
