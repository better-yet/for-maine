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

//disable toolbar
add_filter('show_admin_bar', '__return_false');

//send form submission to mailchimp
add_action('wp_ajax_mailchimp', 'formaine_mailchimp');
add_action('wp_ajax_nopriv_mailchimp', 'formaine_mailchimp');
function formaine_mailchimp() {
	//input checking
	if (empty($_POST['email']) || empty($_POST['mailchimp']) || !wp_verify_nonce($_POST['mailchimp'], 'formaine')) {
		die('Required fields missing. Please refresh the page and try again.');
	}

	//send info to mailchimp
	require_once(get_stylesheet_directory() . '/mailchimp-api-master/src/MailChimp.php');
	$MailChimp = new \DrewM\MailChimp\MailChimp(MAILCHIMP_API);
	$subscriber_hash = $MailChimp->subscriberHash($_POST['email']);
	$result = $MailChimp->put('lists/' . MAILCHIMP_LIST . '/members/' . $subscriber_hash, array(
		'email_address' => $_POST['email'],
		'status_if_new' => 'subscribed',
		'email_type' => 'html',
	));

	//adjust message if mailchimp was not successful
	if (!$MailChimp->success()) {
		echo 'MailChimp error: ' . $MailChimp->getLastError();
	} else {
		echo 'Thank you!';
	}

	die();
}