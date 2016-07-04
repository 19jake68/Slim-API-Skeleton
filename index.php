<?php

require 'vendor/autoload.php';

$app = new \Slim\App;

$app->add(new \Tuupola\Middleware\Cors([
	'origin' => ['*'],
	'methods' => ['GET'],
	'headers.allow' => [],
	'headers.expose' => [],
	'credentials' => false,
	'cache' => 0
]));

$app->run();