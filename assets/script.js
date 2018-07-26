jQuery(function($){

	//smooth scrolling
	$('nav').on('click', 'a', function(e){
		e.preventDefault();
		var target = $(this).attr('href');
		$('html, body').animate({
			scrollTop: $(target).offset().top
		}, 500);
		location.hash = target;
	});

	//carousel
	$('.carousel').slick({
		arrows: false,
		autoplay: true,
		autoplaySpeed: 7000,
		vertical: true,
		verticalSwiping: true,
	});

	//mailchimp
	var $form = $('#mailchimp');
	$form.submit(function() {
		$.post('/wp-admin/admin-ajax.php?action=mailchimp', $form.serialize(), function(data) {
			alert(data);
		});
		return false;
	});
});