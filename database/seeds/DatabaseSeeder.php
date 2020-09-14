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
        $this->call(TagTableSeeder::class);
        $this->call(UserTableSeeder::class);
        $this->call(ProjectTableSeeder::class);
        $this->call(LanguageTableSeeder::class);
        $this->call(LinkTableSeeder::class);
        $this->call(TimelineTableSeeder::class);
        $this->call(PostTableSeeder::class);
    }
}
