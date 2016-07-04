<?php
// DIC Configuration

$container = $app->getContainer();

$container['db'] = function($c) {
	$settings = $c->get('settings')['db'];
	$pdo = new PDO(
		'mysql:host=' . $settings['host'] . ';dbname=' . $settings['name'],
		$settings['user'],
		$settings['pass']
	);
	$pdo->setAttribute(PDO::ATTR_ERRMODE. PDO::ERRMODE_EXCEPTION);
	$pdo->setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE, PDO::FETCH_ASSOC);
};