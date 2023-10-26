<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    protected array $seeds = [
        TagTableSeeder::class,
        UserTableSeeder::class,
        ProjectTableSeeder::class,
        LanguageTableSeeder::class,
        TimelineEventTableSeeder::class,
        PostTableSeeder::class,
        GameTableSeeder::class,
        GameClipTableSeeder::class,
    ];

    public function run(): void
    {
        $this->call($this->seeds);
    }
}
