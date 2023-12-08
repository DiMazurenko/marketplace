<!DOCTYPE html>
<html lang="en">

<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title><?= $site->title()->html() ?></title>
	<?= css('assets/css/style.css') ?>
</head>

<body>
	<header>
		<div class="header-content">
			<h1><?= $site->title()->html() ?></h1>
			<nav>
				<ul>
					<li><a href="<?= url('home') ?>">Главная</a></li>
					<li><a href="<?= url('products') ?>">Продукты</a></li>
					<li><a href="<?= url('contact') ?>">Контакты</a></li>
				</ul>
			</nav>
		</div>
	</header>