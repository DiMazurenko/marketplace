<?php

use Kirby\Toolkit\Str;

if ($page->features()->isNotEmpty()) {
  $featuresObject = $page->features()->toObject();
  $features = [
    'title' => $featuresObject->caption()->value(),
    'type' => $featuresObject->typeOfContent()->value(),
  ];

  if ($features['type'] === 'slides') {
    foreach ($featuresObject->slides()->toStructure() as $slide) {
      $features['slides'][] = [
        'id' => Str::uuid(),
        'title' => $slide->title()->value(),
        'caption' => $slide->caption()->value(),
        'image' => ($image = $slide->image()->toFile()) ? $image->url() : false
      ];
    }
  }

  if ($features['type'] === 'video' && ($video = $page->features()->toObject()->video()->toFile())) {;
    $features['video'] = $video->url();
  }
}


if ($page->overview()->isNotEmpty()) {
  $overview = [
    'title' => $page->overview()->toObject()->caption()->value(),
    'images' => []
  ];

  foreach ($page->overview()->toObject()->images()->toFiles() as $image) {
    $overview['images'][] = $image->url();
  }
}

if ($page->cases()->isNotEmpty()) {
  $casesObject = $page->cases()->toObject();
  $cases = [
    'title' => $casesObject->caption()->value(),
    'items' => []
  ];

  foreach ($casesObject->items()->toStructure() as $item) {
    $cases['items'][] = [
      'title' => $item->title()->value(),
      'subline' => $item->subline()->value(),
      'link' => $item->link()->toUrl(),
      'tags' => $item->tags()->split(',')
    ];
  }
}



$data = [
  'footer' => $site->getFooter(),
  'meta' => $page->getMeta(),
  'title' => $page->title()->value(),
  'form' => $page->getFormParams(),
  'caption' => $page->caption()->value(),
  'cover' => ($img = $page->cover()->toFile()) ? $img->url() : false,
  'category' => $page->category()->value(),
  'overview' => $overview ?? null,
  'features' => $features ?? null,
  'cases' => $cases ?? null
];

$kirby->response()->json();
echo json_encode($data);
