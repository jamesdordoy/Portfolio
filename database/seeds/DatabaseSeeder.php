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
        $this->call(UsersTableSeeder::class);
        $this->call(ProjectsTableSeeder::class);
        $this->call(LanguagesTableSeeder::class);
        $this->call(TagsTableSeeder::class);
        $this->call(LinksTableSeeder::class);
    }
}
