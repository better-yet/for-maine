jQuery(function($){
	$('.carousel').slick({
		arrows: false,
		autoplay: true,
		autoplaySpeed: 7000,
		vertical: true,
		verticalSwiping: true,
	});

	var $form = $('#mailchimp');
	$form.submit(function() {
		$.post('/wp-admin/admin-ajax.php?action=mailchimp', $form.serialize(), function(data) {
			alert(data);
		});
		return false;
	});
});