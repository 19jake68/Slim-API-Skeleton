<?php
// Application middleware

$app->add(new \Tuupola\Middleware\Cors([
	'origin' => ['*'],
	'methods' => ['GET'],
	'headers.allow' => [],
	'headers.expose' => [],
	'credentials' => false,
	'cache' => 0
]));