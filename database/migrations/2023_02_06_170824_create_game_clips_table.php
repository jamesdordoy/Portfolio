<?php

use App\Models\Game;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class () extends Migration {

    public function up(): void
    {
        Schema::create('game_clips', function (Blueprint $table) {
            $table->id();
            $table->foreignIdFor(Game::class);
            $table->foreign('game_id')->references('id')->on('games');
            $table->text('url');
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('game_clips');
    }
};
