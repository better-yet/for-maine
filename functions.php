<?php

//add CSS and JS to header and footer
add_action('wp_enqueue_scripts', function() {
	wp_enqueue_style('fitwel', get_stylesheet_directory_uri() . '/assets/compiled/style.css', array(), filemtime(get_stylesheet_directory() . '/assets/compiled/style.css'));
	wp_enqueue_script('fitwel', get_stylesheet_directory_uri() . '/assets/compiled/script.js', array('jquery'), filemtime(get_stylesheet_directory() . '/assets/compiled/script.js'), true);
});

//advanced custom fields options page
if (function_exists('acf_add_options_page')) {
	acf_add_options_page();	
}
