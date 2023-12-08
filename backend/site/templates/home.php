<?php

$hero = $page->hero()->toEntity();
$about = $page->about()->toEntity();

$data = [
	'menu' => $site->getMenu(),
	'footer' => $site->getFooter(),
	'meta' => $page->getMeta(),
	'form' => $page->getFormParams(),
	'hero' => [
		'caption' => $hero->caption()->value(),
		'slides' => $hero->slides()->toStructure()->map(function ($item) {

			return [
				'id' => (int) $item->id(),
				'caption' => $item->caption()->value(),
				'image' => $image->url(),
			];
		})->values()
	],
	'about' => [
		'caption' => $about->caption()->value(),
		'images' => $about->images()->toFiles()->pluck('url')
	],

];


$kirby->response()->json();
echo json_encode($data);
