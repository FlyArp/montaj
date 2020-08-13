$(function() {

// Глобальные Переменные===================================================================================================================================================================================================
	// var scrollOffset = $(window).scrollTop() + $(window).height(),
	// animateBlocks = [$('#about')],
	// numAnimblocks = 0;

// Функции================================================================================================================================================================
	// Анимация появления
	// function animation(blockId) {
	// 	if (blockId.attr('data-anim-ready') === 'true') {
	// 		return;
	// 	}
	// 	let animElem = $('[data-animation]'),
	// 	count = 0,
	// 	length = blockId.find(animElem).length;

	// 	$.each(blockId.find(animElem), function(index, value) {

	// 		let h1 = $(value).offset().top;
	// 		if (scrollOffset - h1 >= 50) {
	// 			$(value).addClass('appearance-anim-' + $(value).attr('data-animation'))
	// 			count = count + 1;
	// 		}
	// 	});
	// 	if (length === count) {
	// 		blockId.attr('data-anim-ready', 'true');
	// 	}
	// }

// Активный код================================================================================================================================================================
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
			// $('.burger').removeClass('active');
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
	// Анимация появления
	// animation($('#about'));
	// Пройтись по каждому блоку

	// $(window).on('scroll', function(event) {
	// 	scrollOffset = $(window).scrollTop() + $(window).height();
	// 	animation(animateBlocks[numAnimblocks]);
	// 	if (scrollOffset - animateBlocks[numAnimblocks].offset().top >= animateBlocks[numAnimblocks].height()) {
	// 		if((numAnimblocks + 1) < animateBlocks.length){
	// 			numAnimblocks = numAnimblocks + 1;
	// 		} 
	// 	}
	// });

})