<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class () extends Migration {

    public function up(): void
    {
        Schema::create('taggables', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('tag_id');
            $table->unsignedBigInteger('taggable_id');
            $table->string('taggable_type')->index();
            $table->timestamps();

            $table->foreign('tag_id')->references('id')->on('tags');
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('taggables');
    }
};
