jQuery(function($){
	$('.carousel').slick({
		arrows: false,
		autoplay: true,
		autoplaySpeed: 7000,
		vertical: true,
		verticalSwiping: true,
	});

	var $form = $('#mailchimp');
	var $input = $form.find('input[name="EMAIL"]');
	if ($form.length > 0) {
		$form.submit(function() {
			$.ajax({
				method: 'GET',
				url: 'https://better-yet.us16.list-manage.com/subscribe/post-json',
				data: {
					EMAIL: $input.val(),
					id: 'bf79e76dd2',
					u: 'd72080f38e5610f4bdbb41303ac6f325',
					c: '?',
				},
				cache: false,
				dataType: 'json',
				contentType: 'application/json; charset=utf-8',
				error: function (err) { 
					alert('Could not connect to MailChimp. Please try again later.')
				},
				success: function (data) {
					if (data.result === 'success') {
						// Yeahhhh Success
						console.log(data.msg);
						$input.css('borderColor', '#ffffff');
						$input.val('');
					} else {
						// Something went wrong, do something to notify the user.
						console.log(data.msg);
						$input.css('borderColor', '#ff8282');
					}
				}
			});
			return false;
		})
	}
});