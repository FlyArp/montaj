$(function() {
	var scrollOffset = $(window).scrollTop(),
	headerOffset = $('.bottom-header').offset().top;

// Burger menu
	$('.burger').click(function() {
		$(this).toggleClass('active');
		$('.menu').slideToggle(400);
	});

	$('.form__input').focus(function() {
	    $($(this).parent().find('.form__placeholder')).hide();
	});

	$('.form__input').blur(function() {
	    if ($(this).val().trim() === '') {
	        $($(this).parent().find('.form__placeholder')).show();
	    }
	});

	$(document).on('click', function(event) {
		if (!event.target.closest('.burger')) {
			if ($('.burger').css('display') === 'block' && $('.menu').css('display') === 'block'){
				$('.menu').slideUp(400);
				$('.burger').removeClass('active');
			}
			
		}
	});

	window.addEventListener('resize', () => {

 		if ($('.burger').css('display') === 'none') {
 			$('.menu').css({display: 'block'});
 		} else{
 			$('.menu').css({display: 'none'});
 		}
	});

	$(window).on('scroll', function(event) {
		scrollOffset = $(window).scrollTop();
		if (scrollOffset >= headerOffset) {
			$('.bottom-header').addClass('fixed');
			$('.top-header').addClass('hide');
		} else {
			$('.bottom-header').removeClass('fixed');
			$('.top-header').removeClass('hide');
		}
	});
})