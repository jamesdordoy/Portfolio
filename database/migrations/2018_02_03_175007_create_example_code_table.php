<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateExampleCodeTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('code_examples', function (Blueprint $table) {

            $table->increments('id')->unsigned();
            $table->integer('example_id')->unsigned();

            $table->text('type')->nullable(false);
            $table->text('code')->nullable(false);
            $table->timestamps();

           
        });

        Schema::table('code_examples', function(Blueprint $table)
        {
            $table->foreign('example_id')
            ->references('id')
            ->on('examples');
        });
    }
    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('code_examples');
    }
}
