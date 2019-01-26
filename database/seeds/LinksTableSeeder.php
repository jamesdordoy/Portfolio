<?php

use Illuminate\Database\Seeder;

class LinksTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        factory(\App\Models\Link::class)->create([
            'name' => "YouTube",
            'link' => "www.youtube.com"
        ]);
    }
}
