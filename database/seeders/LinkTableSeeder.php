<?php

namespace Database\Seeders;

use App\Models\Link;
use Illuminate\Database\Seeder;

class LinkTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Link::factory()->create([
            'name' => 'YouTube',
            'link' => 'www.youtube.com',
        ]);
    }
}
