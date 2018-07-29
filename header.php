<!doctype html>
<html <?php language_attributes()?>>
	<head>
		<meta charset="utf-8">
		<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
		<meta name="description" content="<?php bloginfo('description')?>">
		<meta http-equiv="X-UA-Compatible" content="IE=edge">
		<link rel="stylesheet" href="//fonts.googleapis.com/css?family=News+Cycle:400,700|Roboto+Mono">
		<title><?php wp_title('|', true, 'right')?><?php echo get_bloginfo('name')?></title>
		<!--[if lt IE 9]>
			<script src="https://oss.maxcdn.com/html5shiv/3.7.3/html5shiv.min.js"></script>
			<script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
		<![endif]-->
		<?php wp_head()?>
	</head>
	<body <?php body_class()?>>
		<nav class="navbar navbar-expand-lg navbar-light d-none d-md-block">
			<div class="container">
				<a href="/" class="logo scroll" title="FOR/Maine Logo">
					<img src="<?php echo get_stylesheet_directory_uri()?>/assets/img/logo-small.svg" width="129" height="84.16">
				</a>
				<div class="centered-nav">
					<a href="#facts" class="scroll">Maine Forests</a><!--
					--><a href="#about" class="scroll">About FOR/Maine</a>
				</div>
			</div>
		</nav>