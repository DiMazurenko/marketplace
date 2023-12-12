<?php

$hero = $page->hero()->toEntity();
$about = $page->about()->toEntity();
$partners = $page->partners()->toEntity();
$cases = $page->cases()->toEntity();
$services = $page->services()->toEntity();
$solutions = $page->solutions()->toEntity();

$data = [
  'menu' => $site->getMenu(),
  'footer' => $site->getFooter(),
  'meta' => $page->getMeta(),
  'form' => $page->getFormParams(),
  'about' => [
    'caption' => $about->caption()->value(),
    'images' => $about->images()->toFiles()->pluck('url')
  ],


$kirby->response()->json();
echo json_encode($data);