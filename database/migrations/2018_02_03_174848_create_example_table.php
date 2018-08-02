<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateExampleTable extends Migration
{
    public function up()
    {
        Schema::create('examples', function (Blueprint $table) {

            //Id's
            $table->increments('id')->unsigned();
            $table->integer('language_id')->unsigned();

            //Col's
            $table->text('name')->nullable(false);
            $table->boolean('completed')->default(0);
            $table->timestamps();

            $table->foreign('language_id')
            ->references('id')
            ->on('languages'); 
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        //
        Schema::dropIfExists('examples');
    }
}
