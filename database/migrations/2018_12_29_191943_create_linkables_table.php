<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateLinkablesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('linkables', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('link_id')->unsigned();
            $table->integer('linkable_id')->unsigned();
            $table->string('linkable_type')->index();
            $table->timestamps();

            $table->foreign('link_id')->references('id')->on('links');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('linkables');
    }
}
