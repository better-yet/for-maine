jQuery(function($){

	//smooth scrolling
	$(document).on('click', 'a.scroll', function(e){
		e.preventDefault();
		var href = $(this).attr('href');
		var isAnchor = (href.substr(0, 1) == '#');
		var scrollTop = isAnchor ? $(href).offset().top - $('nav').outerHeight() : 0;
		console.log(scrollTop);
		$('html, body').animate({
			scrollTop: scrollTop
		}, 500/* , function(){
			location.hash = isAnchor ? href : '';
		} */);
	});

	//spy on scroll to show second nav
	var $window = $(window);
	var $nav = $('nav');
	var $logo = $nav.find('a.logo');
	var start = 150;
	var fadeDistance = 500;
	var backgroundMax = .8;
	$window.scroll(setNavOpacity);
	setNavOpacity();

	function setNavOpacity(){
		var scroll = $window.scrollTop();
		if (scroll > start) {
			$nav.addClass('fixed-top');
		} else {
			$nav.removeClass('fixed-top');
		}
		var opacity = Math.max(Math.min((scroll - start) / fadeDistance, 1), 0);
		var color = Math.round(255 - (opacity * 255));
		$nav.css({
			backgroundColor: 'rgba(255, 255, 255, ' + opacity * backgroundMax + ')',
			borderColor: 'rgb(' + color + ',' + color + ',' + color + ')',
			color: 'rgb(' + color + ',' + color + ',' + color + ')'
		});
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