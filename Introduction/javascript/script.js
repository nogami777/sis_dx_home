var mySwiper = new Swiper('.swiper-container', {
	// slideLoop
	loop: true,
	loopFillGroupWithBlank: false,
	preloadImages: false,
	freeMode: true,
	freeModeMomentumRatio: 2,
	freeModeMomentumBounce: true,
	freeModeMomentum: true,
	freeModeMinimumVelocity: 5.5,
	loopPreventsSlide: false,
	// slideSpeed (ms)
	speed: 5000,
    centeredSlides : true,
	slidesPerView: 5.5,
    spaceBetween: 80,
    
	// autoSlide
	autoplay: {
		delay: 0,
		disableOnInteraction: false,
	},
	breakpoints: {
		1366: {
			slidesPerView: 4,
			spaceBetween: 30,
			slidesPerGroup: 1,
			freeMode: true,
			loop: true,
			preloadImages: true,
			speed: 3500,
			autoplay: {
				delay: 0,
				disableOnInteraction: false,
			}
		},
		736: {
			slidesPerView: 2,
			slidesPerGroup: 1,
			spaceBetween: 20,
			centeredSlides: true,
			autoplay: {
				delay: 3000
			}
		}
	},
	
	// arrowGuide
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev'
	},
	
	// pagesGuide
	pagination: {
		el: '.swiper-pagination',
		type: 'bullets',
		clickable: true
	}
});


$(function() {
	$('a[href^="#"]' + 'a:not(".carousel-control")').click(function(){
	var speed = 750;
	var href= $(this).attr("href");
	var target = $(href == "#" || href == "" ? 'html' : href);
	var position = target.offset().top;
		$("html, body").animate({scrollTop:position}, speed, "swing");
	return false;
	});
});
