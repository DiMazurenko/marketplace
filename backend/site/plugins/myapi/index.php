<?php

Kirby::plugin('my/myapi', [
	'api' => [
		'routes' => [
			[
				'pattern' => 'get-products',
				'method' => 'GET',
				'action'  => function () {
					$products = page('products')->children()->listed();
					$data = [];
					foreach ($products as $product) {
						$data[] = [
							'id' => $product->id(),
							'title' => $product->title()->value(),
							'description' => $product->description()->value(),
							'imageUrl' => $product->imageUrl()->value(),
						];
					}
					return $data;
				}
			],
		]
	]
]);
