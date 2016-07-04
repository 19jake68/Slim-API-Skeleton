<?php
// Routes

$app->group('/scoreboard', function() {
	$this->get('', 'App\Controllers\ScoreboardController:get')->setName('scoreboard');
});