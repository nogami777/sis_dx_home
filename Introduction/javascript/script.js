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
	$('.js-modal-open').on('click',function(){		//「クリックしてみて」をクリックされたときに実行する部分
		$('#omikuji_box').addClass('cs-omikuji_box');	//イメージを動かすクラス（cs-omikuji_box）を与える（追加と同時に動き出す。動きはCSSで定義）
		return false;
	});
	$('#omikuji_box').on('animationend', function() {	//おみくじ箱のイメージが動いた後（cs-omikuji_box終了後）に実行する部分
		var img = new Array (				//おみくじの出力イメージを配列化
			'images/omikuji_daikichi.png',
			'images/omikuji_chuukichi.png',
			'images/omikuji_syoukichi.png',
			'images/omikuji_kyou.png',
		);
		var random = Math.floor(Math.random() * img.length);				//0～配列数までの間でランダムに数字を生成し小数点以下切り捨てて整数化
		$('.omikuji-modal-content').append('<p>あなたの今日の運勢は</p>');		//モーダルコンテンツへHTMLソースを埋め込み
		$('.omikuji-modal-content').append('<P><img src =' +img[random]+ '></p>');	//ランダム整数に該当する位置のイメージをセット
//		$('.omikuji-modal-content').append('<a class="js-modal-close">閉じる</a>');
		$('.omikuji-modal-content').append('<a class="js-modal-close" href="">閉じる</a>');
		var h1 = $('#header_inner').height();		//ヘッダーID=header_innerの高さを取得
		var h2 = $('.CoffeeBrake_Top').height();	//ヘッダー要素=CoffeeBrake_Topの高さを取得
		var h3 = h1 + h2;
		var scrollPosition = $(window).scrollTop();			//現在のスクロール座標位置を取得
		$('.js-modal,.omikuji-modal-bg').css('margin-top', - h3 + scrollPosition);	//モーダルTOP位置がヘッダー直下になってしまう対策としてヘッダー高さ分上へ移動＋現在位置まで下へ移動
		$('body').addClass('fixed').css({'top':-scrollPosition});	//モーダル表示中はスクロールできないようにbodyの座標位置を固定化
		$('.js-modal').fadeIn();					//モーダルをフェードイン表示
		$('#omikuji_box').removeClass('cs-omikuji_box');		//イメージを動かすクラス（cs-omikuji_box）を削除（次回クリックに備えて）
		return false;							//元の画面は更新しない
	});
	$('.js-modal-close').on('click',function(){			//要素=js-modal-close（閉じるとかモーダル背景）をクリックされると以下ロジックを実行
//		var scrollPosition = $(window).scrollTop();			//現在のスクロール座標位置を取得
		$('.js-modal').fadeOut();				//モーダルをフェードアウト消去
		$('.omikuji-modal-content').empty();			//モーダルコンテンツに先ほどのHTMLソースが残存しているので消去（次回に備えて）
//		$('body').removeClass('fixed').css({'top': scrollPosition});		//bodyを固定化していた定義を開放
		$('body').removeClass('fixed');		//bodyを固定化していた定義を開放
		$(window).scrollTop(100,scrollPosition);			//スクロール位置が初期化されているので取得しておいた元の座標位置へ移動
//		window.scrollTop( 0 , scrollPosition );			//スクロール位置が初期化されているので取得しておいた元の座標位置へ移動
		return false;
	});
});


$(function() {
	$('.js-modal-open999').on('click',function(){
//		looopAnimation("omikuji_box", "js-omikuji_box", 100);	// ID値「omikuji_box」に対してCSSアニメ―ション「js-omikuji_box」を100ミリ秒の間隔を空けてループ再生
//		var position = $(this).offset().top; //ヘッダの高さ分位置をずらす
//		$('.js-modal').parents().css('transform','none');
//		$('#omikuji_box').addClass('js-omikuji_box');
//		$('#omikuji_box').addClass('js-omikuji_box');
//		$('#omikuji_box').on('webkitTransitionEnd　mozTransitionEnd　oTransitionEnd　transitionend', function() {


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
//		$('.header_contact_inner').css('transform','none');
//		$('#page').css('transform','none');
		var h1 = $('#header_inner').height();
		var h2 = $('.CoffeeBrake_Top').height();
		var h3 = h1 + h2
//		$('.omikuji-modal-content').append('<p>' +h1 +h2 +h3+ '</p>');
		$('.js-modal,.omikuji-modal-bg').css('margin-top', - h3);
		var scrollPosition = $(window).scrollTop();
		$('body').addClass('fixed').css({'top': -scrollPosition});
//	$('#omikuji_box').addClass('js-omikuji_box');
		$('.js-modal').fadeIn();
		return false;
//		});
	});
	$('.js-modal-close999').on('click',function(){
		$('.js-modal').fadeOut();
		$('.omikuji-modal-content').empty();
		$('body').removeClass('fixed').css({'top': 0});
		window.scrollTo( 0 , scrollPosition );
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

