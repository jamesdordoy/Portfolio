<?php

namespace Database\Seeders;

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
        $this->call(TimelineEventTableSeeder::class);
        $this->call(PostTableSeeder::class);
        $this->call(GameTableSeeder::class);
        $this->call(GameClipTableSeeder::class);
    }
}
