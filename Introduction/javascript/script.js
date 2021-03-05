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
		// slideSpeed (ms)
		delay: 1,
		stopOnLastSlide: false,
		disableOnInteraction: false,
		reverseDirection: false
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

var mySwiper2 = new Swiper('.swiper-container2', {
	loop: true,
	loopFillGroupWithBlank: false,
	loopPreventsSlide: false,
	preloadImages: false,
    centeredSlides : true,
    slidesPerColumn: 1,
//	slidesPerView: 1,
    spaceBetween: 0,
    
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

//omikuji_modal
$(function() {
	$('.js-modal-open').on('click',function(){
//		var position = $(this).offset().top; //ヘッダの高さ分位置をずらす
//		$('.js-modal').parents().css('transform','none');
		var img = new Array (
			'images/omikuji_daikichi.png',
			'images/omikuji_chuukichi.png',
			'images/omikuji_syoukichi.png',
			'images/omikuji_kyou.png',
		);
		var random = Math.floor(Math.random() * img.length);
		$('.omikuji-modal-content').append('<p>あなたの今日の運勢は</p>');
		$('.omikuji-modal-content').append('<P><img src =' +img[random]+ '></p>');
		$('.omikuji-modal-content').append('<a class="js-modal-close" href="">閉じる</a>');
//		$elm.css({transform: none !important});
//		$elm.css({transform: none});
//		$('.tabContents,.header_inner').css('transform','none');
//		$('.CoffeeBrake_Top,.CoffeeBrake_Title,.Coffee_Main').css('transform','none');
		$('.header_contact_inner').css('transform','none');
//		$('#page').css('transform','none');
		var h1 = $('#header_inner').height();
		var h2 = $('.CoffeeBrake_Top').height();
		var h3 = h1 + h2
		$('.js-modal,.omikuji-modal-bg').css('margin-top', - h3);
		$('.js-modal').fadeIn();
		return false;
	});
	$('.js-modal-close').on('click',function(){
		$('.js-modal').fadeOut();
		$('.omikuji-modal-content').empty();
//		$('.js-modal').parents().css('transform','');
		return false;
	});
});

function omikuji() {
	var img = new Array (
			'images/omikuji_daikichi.png',
			'images/omikuji_chuukichi.png',
			'images/omikuji_syoukichi.png',
			'images/omikuji_kyou.png',
	);
	var random = Math.floor(Math.random() * img.length);
	var result = '<img src =' +img[random]+ '>';
	document.getElementById('result').innerHTML = result;
}

