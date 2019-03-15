$(document).ready(function(){

	if ($('.door').length <= 0) {
		return false;
	}

	let windowWidth = $(window).width();

	if (windowWidth < 768) {
		$('.doors-wrapper').css({paddingLeft: (windowWidth/2 - 88) + 'px'});
	}

	function closeAllDoors() {
		$('.door').removeClass('opened');
		$('.door-item').attr('style', '');
		$('.door-description').removeClass('active');
		$('.door-description').removeClass('door-description_left');
		$('.doors-inn-item').removeClass('visible');
	};

	$(document).on('click', '.doors-item-wrapper', function() {
		let temp = $(this).find('.door').hasClass('opened');

		closeAllDoors();

		if (temp) {
			$(this).find('.door').removeClass('opened');
			$(this).find('.door-description').removeClass('active');
			$(this).find('.doors-inn-item').removeClass('visible');

			$(this).find('.door-item').attr('style', '');
			return false;
		}

		$(this).find('.door').addClass('opened');
		$(this).find('.door-description').addClass('active');
		if ($('.door-description.active').length) {
			if ($('.door-description.active').offset().left > 750) {
				$('.door-description.active').addClass('door-description_left');
			}
		}
		
		$(this).find('.doors-inn-item').addClass('visible');

		$(this).find('.door-item').css({left: '0px', transform: 'translateX(-70%)'});
	});

	$(document).on('click', '.door-description', function() {
		return false;
	});

	$(document).on('click', '.door-description__close', function(e) {
		e.preventDefault();
		$(this).closest('.door-description').removeClass('active');
	});

	let trackWidth = document.querySelectorAll('.doors-wrapper-track')[0].offsetWidth;
	let wrapperWidth = $('.doors-wrapper').width();

	$(document).on('click', '.doors-wrapper-arrow_next', function() {
		$(this).css('pointer-events', 'none');
		setTimeout(() => {
			$(this).css('pointer-events', 'auto');
		}, 300);

		$('.doors-wrapper-arrow_prev').removeClass('disabled');

		let temp = $('.doors-wrapper-track').css('transform');
		let tempResult = ((trackWidth)*(-1) + wrapperWidth - 100);

		temp = temp.split(',');
		temp = temp[temp.length-2];
		temp = parseInt(temp) - 327;

		let tempCalc = temp - 327;

		console.log(tempCalc);
		console.log(tempCalc <= tempResult);

		if (tempCalc <= tempResult) {

			$('.doors-wrapper-arrow_next').addClass('disabled');

			} else {

			$('.doors-wrapper-arrow_next').removeClass('disabled');
		}

		if (temp <= tempResult) {
			return false;
		}

		$('.doors-wrapper-track').css({transform: `translateX(${temp}px)`});
	})

	$(document).on('click', '.doors-wrapper-arrow_prev', function() {
		$(this).css('pointer-events', 'none');
		setTimeout(() => {
			$(this).css('pointer-events', 'auto');
		}, 300);

		let temp = $('.doors-wrapper-track').css('transform');


		$('.doors-wrapper-arrow_next').removeClass('disabled');
		temp = temp.split(',');
		temp = temp[temp.length-2];
		temp = parseInt(temp) + 327;

		let tempCalc = temp + 327;

		console.log(tempCalc);
		console.log(tempCalc > 0);

		if (tempCalc > 0) {
			$('.doors-wrapper-arrow_prev').addClass('disabled');
		} else {
			$('.doors-wrapper-arrow_prev').removeClass('disabled');
		}

		if (temp > 0) {
			return false;
		}

		$('.doors-wrapper-track').css({transform: `translateX(${temp}px)`});
	})

	
});