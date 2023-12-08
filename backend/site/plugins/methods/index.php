<?php

use Kirby\Cms\Url;

Kirby::plugin('pfrlv/custom-methods', [
	'siteMethods' => [
		'getFooter' => function () {
			$kirby = kirby();
			$site = $kirby->site();
			$footer = $site->contacts()->toEntity();
			$docs = $footer->doc_pages()->toPages()->map(function ($p) {
				return [
					'title' => $p->title()->value(),
					'url' => '/docs' . Url::path($p->url(), true)
				];
			})->values();

			return [
				'copyright' => $footer->copyright()->value(),
			];
		},
		'getMenu' => function () {
			$kirby = kirby();
			$site = $kirby->site();
			$products = $site->index()->published()->template('product');

			$products = [
				'name' => 'Product',
				'items' => []
			];


			foreach ($products->filter('category', 'product') as $p) {
				$products['items'][] = [
					'name' => $p->title()->value(),
					'url' => '/products' . Url::path($p->url(), true)
				];
			}


			return [
				$products,
				[
					'name' => 'FAQ',
					'url' => '/faq'
				]
			];
		}
	],
	'pageMethods' => [
		'getFormParams' => function () {
			$kirby = kirby();
			$site = $kirby->site();

			$bookFormField = $this->book_form()->or($site->book_form())->toEntity();

			return [
				'portalId' => $bookFormField->portalId()->value(),
				'formGuid' => $bookFormField->formGuid()->value(),
			];
		},
		'getMeta' => function () {
			$kirby = kirby();
			$site = $kirby->site();

			return [
				'title' => $this->meta_title()->or($site->meta_title())->value(),
				'description' => $this->meta_description()->or($site->meta_description())->value(),
				'og' => [
					'image' => ($img = $this->og_image()->toFile()) ? $img->url() : null,
					'title' => $this->og_title()->or($site->og_title())->value(),
					'description' => $this->og_description()->or($site->og_description())->value()
				]
			];
		}
	]
]);
