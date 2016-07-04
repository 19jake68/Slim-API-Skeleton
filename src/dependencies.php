<?php
// DIC Configuration

$container = $app->getContainer();

$container['errorHandler'] = function($c) {
	return function($request, $response, $exception) use ($c) {
		$data = [
			'code' => $exception->getCode(),
			'message' => $exception->getMessage(),
			'file' => $exception->getFile(),
			'line' => $exception->getLine(),
			'trace' => explode("\n", $exception->getTraceAsString())
		];
		
		return $c->get('response')->withStatus($response->getStatus())
								  ->withHeader('Content-Type', 'application/json')
								  ->write(json_encode($data));
	};
};

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