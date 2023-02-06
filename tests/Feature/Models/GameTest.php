<?php

use App\Models\Game;
use App\Models\GameClip;

test('test_game_clips_relationship', function () {
    $game = Game::factory()->create();

    $clip = GameClip::factory()->create([
        'game_id' => $game->id,
    ]);

    $this->assertTrue($game->clips->contains($clip));
});
