jQuery(function($){

	//smooth scrolling
	$(document).on('click', 'a.scroll', function(e){
		e.preventDefault();
		var href = $(this).attr('href');
		var isAnchor = (href.substr(0, 1) == '#');
		$('html, body').animate({
			scrollTop: isAnchor ? $(href).offset().top : 0
		}, 500, function(){
			location.hash = isAnchor ? href : '';
		});
	});

	//spy on scroll to show second nav
	var $window = $(window);
	var $nav = $('nav');
	var $logo = $nav.find('svg');
	var $anchors = $nav.find('a');
	var start = 120;
	var fadeDistance = 500;
	var backgroundMax = .5;
	$window.scroll(setNavOpacity);

	function setNavOpacity(){
		var scroll = $window.scrollTop();
		if (scroll > start) {
			$nav.addClass('fixed-top');
		} else {
			$nav.removeClass('fixed-top');
		}
		var opacity = Math.min((scroll - start) / fadeDistance, 1);
		$nav.css({backgroundColor: 'rgba(255, 255, 255, ' + opacity * backgroundMax + ')'});
		var color = 255 - (opacity * 255);
		$anchors.css({color: 'rgb(' + color + ',' + color + ',' + color + ')'});
		$logo.css({opacity: opacity});
	}

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