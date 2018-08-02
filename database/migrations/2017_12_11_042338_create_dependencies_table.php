<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateDependenciesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('dependencies', function (Blueprint $table) {
            $table->increments('id')->unsigned();
            $table->text('name')->nullable(false);
            $table->text('description')->nullable(false);
            $table->text('type')->nullable(false);
            $table->text('link')->nullable(false);
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
        Schema::dropIfExists('dependencies');
    }
}
