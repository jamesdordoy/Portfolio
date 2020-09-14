<?php

use Carbon\Carbon;
use App\Models\Post;
use Illuminate\Database\Seeder;

class PostTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Post::factory()->create([
            'title' => "Added meta property to columns array",
            "subtitle" => "Laravel Vue Datatable - 0.3.1",
            "body" => "Added new meta value to columns array to allow users to to parse additional attributes to their injected components.",
            "user_id" => 1,
            "created_at" => Carbon::parse("2019-08-12 00:00:00"),
        ]);

        Post::factory()->create([
            'title' => "Override table body",
            "subtitle" => "Laravel Vue Datatable - 0.3.11",
            "body" => "Added functionality to override table body. This is to allow users to add events to the rendered rows or to implement more complex functionality.
            <br><br> Also fixed a URL filter issue.",
            "user_id" => 1,
            "created_at" => Carbon::parse("2019-09-19 00:00:00"),
        ]);

        Post::factory()->create([
            'title' => "Added Laravel Relationships to datatable",
            "subtitle" => "Laravel Vue Datatable - 0.3.12",
            "body" => "Added functionality to use nested data provided by Eloquent on the frontend. This was implemented using the dot notation.",
            "user_id" => 1,
            "created_at" => Carbon::parse("2019-09-27 00:00:00"),
        ]);

        Post::factory()->create([
            'title' => "Bugfixes and added props",
            "subtitle" => "Laravel Vue Datatable - 0.3.19",
            "body" => "Added props for overriding default orderBy direction and sortBy column when the table is initaily loaded.
            <br><br>Also corrected some bugs with the column not found exception not firing and boolean values not being sortable.",
            "user_id" => 1,
            "created_at" => Carbon::parse("2019-10-26 00:00:00"),
        ]);

        Post::factory()->create([
            'title' => "Added table joins",
            "subtitle" => "Laravel Vue Datatable - 0.4.1",
            "body" => "Added new functionality to allow for table joins using the Laravel Query Builder.
            <br><br>The table has been updated with a new column prop which enables a columnName value to be sent to the backend which can then be used rather than the alias.",
            "user_id" => 1,
            "created_at" => Carbon::parse("2019-11-21 00:00:00"),
        ]);

        Post::factory()->create([
            'title' => "Added Documentation",
            "subtitle" => "Laravel Vue Datatable",
            "body" => "Created custom documentation as an SPA to be hosted on GitHub. The documentation has been built with a markdown parser so that the code examples are in a highly readable format.",
            "user_id" => 1,
            "created_at" => Carbon::parse("2019-09-11 00:00:00"),
        ]);

        Post::factory()->create([
            'title' => "Added Relationship Management",
            "subtitle" => "Laravel Vue Datatable PHP - 1.3.2",
            "body" => "Added functionality to add relationships to the default query. The relationships are also filterable and orderable to allow for more complex queries.
            <br><br> Also moved the package implementation to a OOP approach to remove public methods from model and in prep for unit testing.",
            "user_id" => 1,
            "created_at" => Carbon::parse("2020-01-02 00:00:00"),
        ]);
    }
}
