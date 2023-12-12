<?php

use Kirby\Toolkit\Str;

$sections = [];

foreach ($page->sections()->toStructure() as $section) {
  $items = [];

  foreach ($section->items()->toStructure() as $item) {
    $items[] = [
      'title' => $item->title()->value(),
      'text' => $item->text()->kt()->value()
    ];
  }

  $sections[] = [
    'title' => $section->title()->value(),
    'id' => Str::slug($section->title()),
    'items' => $items
  ];
}

$data = [
  'banner' => $site->banner()->value(),
  'menu' => $site->getMenu(),
  'footer' => $site->getFooter(),
  'meta' => $page->getMeta(),
  'title' => $page->title()->value(),
  'caption' => $page->caption()->value(),
  'sections' => $sections,
  'form' => $page->getFormParams(),
];

$kirby->response()->json();
echo json_encode($data);