<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class() extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('diskables', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('disk_id');
            $table->unsignedBigInteger('diskable_id');
            $table->string('diskable_type')->index();
            $table->timestamps();

            $table->foreign('disk_id')->references('id')->on('disks');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('diskables');
    }
};
