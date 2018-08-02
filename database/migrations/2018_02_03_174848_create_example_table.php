<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateExampleTable extends Migration
{
    public function up()
    {
        Schema::create('examples', function (Blueprint $table) {
            $table->increments('id')->unsigned();
            $table->integer('language_id')->unsigned();
            $table->foreign('language_id')->references('id')->on('languages'); 
            $table->text('name')->nullable(false);
            $table->boolean('completed')->default(0);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('examples');
    }
}
