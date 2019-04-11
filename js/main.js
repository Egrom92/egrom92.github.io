$(function () {
// MENU OPENER BURGER

	$('.menu-open').click(function () {
		$('.menu-collapse').toggleClass('d-none');
		$('.menu').toggleClass('opened-menu');
		$('.menu__point').toggleClass('opened-menu-point');
	});

	if ($(window).width() > 960) { 
		// Кешируем объект окна
			$window = $(window);
		                
		   $('[data-type="background"]').each(function(){
		     var $bgobj = $(this); // Назначаем объект
		                    
		      $(window).scroll(function() {
		                    
				// Прокручиваем фон со скоростью var.
				// Значение yPos отрицательное, так как прокручивание осуществляется вверх!
				var yPos = -($window.scrollTop() / $bgobj.data('speed')); 
				
				// Размещаем все вместе в конечной точке
				var coords = '50% '+ yPos + 'px';

				// Смещаем фон
				$bgobj.css({ backgroundPosition: coords });
				
			}); 

		 });	
    }

// SMOOTH MOVE TO BLOCK
	$(".go-to").click(function (e) {
        e.preventDefault();
        elementClick = $(this).attr("href");
        destination = $(elementClick).offset().top;
        $("body,html").animate({scrollTop: destination }, 800);
    });

//PRELOADER
	var $preloader, $spinner;
		$preloader = $('#page-preloader');
		$spinner  = $preloader.find('.spinner');
		$spinner.fadeOut();
		$preloader.delay(350).fadeOut('slow');


//ARCTIC MODAL
    $('.phone-modal').click(function(){
    	$('#exampleModal').arcticmodal();
    });


	//SLICK-SLIDER
	$('.recall__slider').slick({
		dots: true,
		nextArrow: '<button type="button" class="slick-next"><i class="fa fa-angle-right"></i></button>',
		prevArrow: '<button type="button" class="slick-prev"><i class="fa fa-angle-left"></i></button>'
	});
});

$(function () {
	//YANDEX MAP
	ymaps.ready(init);

	function init() {
		var myMap,
			myPlacemark;

		myMap = new ymaps.Map("yanndex-map", {
			center: [46.47403963, 30.76006328],
			zoom: 14,
			controls: ['zoomControl'],
			behaviors: ['drag']
		});

		myPlacemark = new ymaps.Placemark([46.47412857, 30.74600850]), ({
			hintContent: 'Москва!',
			balloonContent: 'Столица России'
		});

		myMap.geoObjects.add(myPlacemark);
		myMap.behaviors.disable('scrollZoom');
		

	
	}
});