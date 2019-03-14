$(document).ready(function() {

	// class Cookie {
	// 	constructor(name, value, options) {
	// 		this.name = name;
	// 		this.options = options;
	// 		this.value = value;
	// 	}

	// 	get() {
	// 		const matches = document.cookie.match(new RegExp(
	// 			"(?:^|; )" + this.name.replace(/([.$?*|{}()\[\]\\\/+^])/g, '\\$1') + "=([^;]*)"
	// 		));

	// 		return matches ? decodeURIComponent(matches[1]) : undefined;
	// 	}

	// 	exist() {
	// 		return !!this.get();
	// 	}

	// 	set() {
	// 		let options = this.options,
	// 		expires = options.expires;

	// 		if (expires && typeof expires === "number") {
	// 			const d = new Date();
	// 			d.setTime(d.getTime() + expires * 1000);
	// 			expires = options.expires = d;
	// 		}
	// 		if (expires && expires.toUTCString) {
	// 			options.expires = expires.toUTCString();
	// 		}

	// 		let value = encodeURIComponent(this.value);

	// 		let updatedCookie = `${this.name}=${value}`;

	// 		for (const propName in options) {
	// 			updatedCookie += "; " + propName;
	// 			const propValue = options[propName];
	// 			if (propValue !== true) {
	// 				updatedCookie += "=" + propValue;
	// 			}
	// 		}

	// 		document.cookie = updatedCookie;
	// 	}

	// 	destroy() {
	// 		this.options = {
	// 			expires: -1
	// 		};
	// 		this.value = "";

	// 		this.set();
	// 	}
	// }


	// let getCookie = new Cookie('name', 'vasya', 1000);

	// // getCookie.name = 'name';
	// // getCookie.value = 'vasya';
	// // getCookie.options = 1000;


	// getCookie.set();

	// console.log(getCookie.get());
	// console.log(document.cookie);

	// let testObj = {
	// 	'1': 'value',
	// 	'2': 'value',
	// 	'asdasd': 'value'
	// }
	// console.log(testObj);
	// let testArr = [];

	// for (let prop in testObj) {
	// 	testArr.push(testObj[prop]);
	// }


	// console.log(testArr);

	// let allInputs = [...document.querySelectorAll('input[type="text"]')];


	// allInputs.map((input) => {	
	// 	input.addEventListener('change', function(){

	// 		allInputs.map((item) => {
	// 			if (item.value) {
	// 				console.log(item.value);

					

	// 				return false;
	// 			}
	// 		})
	// 	})
	// })


	$('[data-date]').inputmask({"mask": "99.99.9999", showMaskOnHover: false,});
	$('[data-phone]').inputmask({"mask": "+7 (999) 999-9999", showMaskOnHover: false,});
	$('[data-count]').inputmask({"mask": "9[9]", showMaskOnHover: false,});
	$('[data-procent]').inputmask({"mask": "9[9] %", showMaskOnHover: false,});
	$('[data-period]').inputmask({"mask": "9[9] год(а)/лет", showMaskOnHover: false,});

	$('[data-hidden-content]').hide();
	$('[data-count-contain]').hide();
	$('[data-option-field]').hide();

	$(document).on('change', '[data-credit-summ]', function () {
		if ($('[data-credit-summ]').val().length > 1) {
			$('[data-credit-first]').attr('disabled', false);
			$('[data-credit-procent]').attr('disabled', false);
			return false;
		} 
		if (parseInt($('[data-credit-summ]').val()) == 0) {
			$('[data-credit-first]').val('');
			$('[data-credit-procent]').val('');
			$('[data-credit-first]').attr('disabled', true);
			$('[data-credit-procent]').attr('disabled', true);
		}
	});

	$(document).on('change', '[data-credit-first]', function() {
		if (parseInt($('[data-credit-summ]').val()) > 0) {
			let tempFirst = $(this).val();
			let tempTotal = $('[data-credit-summ]').val();

			tempFirst = tempFirst.replace(/\s+/g,'');
			tempFirst = parseInt(tempFirst);

			tempTotal = tempTotal.replace(/\s+/g,'');
			tempTotal = parseInt(tempTotal);

			let tempProcent;

			tempProcent = (tempFirst * 100) / tempTotal;

			tempProcent = Math.round(tempProcent);

			if (tempProcent > 0) {
				$('[data-credit-procent]').val(`${tempProcent} %`);
				return false;
			} else {
				$(this).val(`0`);
				$('[data-credit-procent]').val(`0 %`);
				return false;
			}
		}
	});

	$(document).on('change', '[data-credit-procent]', function() {
		if (parseInt($('[data-credit-summ]').val()) > 0) {
			let tempProcent = $(this).val();
			let tempTotal = $('[data-credit-summ]').val();

			tempProcent = tempProcent.replace(/\s+/g,'');
			tempProcent = parseInt(tempProcent);

			tempTotal = tempTotal.replace(/\s+/g,'');
			tempTotal = parseInt(tempTotal);

			let tempFirst;

			tempFirst = (tempTotal / 100) * tempProcent ;

			tempFirst = Math.round(tempFirst);
			tempFirst = tempFirst.toLocaleString('ru');

			if ($(this).val() == 0 || $(this).val().length <= 0) {
				$(this).val(`0 %`);
				$('[data-credit-first]').val(`0 руб`);
				return false;
			}

			$(this).val(`${tempProcent} %`);
			$('[data-credit-first]').val(`${tempFirst} руб`);
		}
	});

	$(document).on('input', '[data-cost]', function() {
		let temp = $(this).val();

		if (temp == 0) {
			temp = '';
			return false;
		}

		temp = temp.replace(/\s+/g,'');
		temp = parseInt(temp);
		temp = temp.toLocaleString('ru');

		$(this).val(`${temp}`);
	});

	$(document).on('change', '[data-cost]', function() {
		let temp = $(this).val();

		if (temp) {
			$(this).val(`${temp} руб`)
		}
	});

	$(document).on('focus', '.form-group__text input', function() {
		$(this).closest('.form-group__text').addClass('active');
	});

	$(document).on('blur', '.form-group__text input', function() {
		if ( $(this).val().length ) return false;
		$(this).closest('.form-group__text').removeClass('active');
	});

	$(document).on('click', '.form-cross', function() {
		$(this).siblings('input').val('');
		$(this).closest('.form-group__text').removeClass('active');
		$('.form-btn.form-btn__next').removeClass('active');
		if ($(this).closest('.form-group__text').siblings().find('[data-credit-procent]').length > 0) {
			$(this).closest('.form-group__text')
				   .siblings()
				   .find('[data-credit-procent]')
				   .val('')
				   .closest('.form-group__text')
				   .removeClass('active');
		}
		if ($(this).closest('.form-group__text').siblings().find('[data-credit-first]').length > 0) {
			$(this).closest('.form-group__text')
				   .siblings()
				   .find('[data-credit-first]')
				   .val('')
				   .closest('.form-group__text')
				   .removeClass('active');
		}
	});

	$(document).on('input', 'input[required]', function() {
		let countInputs = $(document).find('.form-block.active').find('input[required]').length || 0;
		let countFilledInputs = 0;

		$(document).find('.form-block.active').find('input[required]').each(function(){
			if ($(this).val()) {
				return countFilledInputs++;
			}
		});
		console.log(`${countInputs}  :  ${countFilledInputs}`);
		countInputs == countFilledInputs ? $(this).closest('.form-block').find('.form-btn.form-btn__next').addClass('active') : $(this).closest('.form-block').find('.form-btn.form-btn__next').removeClass('active')
	});

	$(document).on('click', '.form-btn.form-btn__next.active', function() {
		let temp = $('.form-block.active').index('.form-block');
		let allFormBlock = ($('.form-block').length - 1);
		let winodwOffsetTop = $('.wrapper').offset().top;
		if (temp >= (allFormBlock)) {
			return false;
		} else {
			$('.form-block').eq((temp + 1)).addClass('active');
			$('input[required]').trigger('input');
		}
		$('.form-block').eq(temp).removeClass('active');
		$('html, body').animate({scrollTop: winodwOffsetTop}, 1000);
	});

	$(document).on('click', '.form-btn.form-btn__prev', function() {
		let temp = $('.form-block.active').index('.form-block');
		let winodwOffsetTop = $('.wrapper').offset().top;

		if (temp <= 0) {
			return false;
		} else {
			$('.form-block').eq((temp - 1)).addClass('active');
		}
		$('.form-block').eq(temp).removeClass('active');
		$('html, body').animate({scrollTop: winodwOffsetTop}, 1000);
	});

	$(document).on('change', '[data-hidden]', function() {
		if ($(this).prop('checked')) {
			$(this).closest('.form-group_hidden').find('.form-group__text').find('input').attr('required', true);
			$(this).closest('.form-group_hidden').find('[data-hidden-content]').slideDown(300);
			$('input[required]').trigger('input');
		} else {
			$(this).closest('.form-group_hidden').find('[data-hidden-content]').slideUp(300, function() {
			$(this).closest('.form-group_hidden').find('.form-group__text').find('input').attr('required', false);
			$('input[required]').trigger('input');
			});
		}
	});

	$(document).on('change', '[data-show]', function() {
		if ($(this).prop('checked')) {
			$(this).closest('.form-group_show').find('.form-group__text').find('input').attr('required', false);
			$(this).closest('.form-group_show').find('[data-show-content]').slideUp(300);
			$('input[required]').trigger('input');
		} else {
			$(this).closest('.form-group_show').find('[data-show-content]').slideDown(300, function() {
			$(this).closest('.form-group_show').find('.form-group__text').find('input').attr('required', true);
			$('input[required]').trigger('input');
			});
		}
	});

	$(document).on('change', '[data-option]', function() {
		if ($(this).prop('checked')) {
			$(this).closest('.form-row').find('[data-option-field]').find('input').attr('required', true);
			$(this).closest('.form-row').find('[data-option-field]').slideDown(300);
			$('input[required]').trigger('input');
		} else {
			$(this).closest('.form-row').find('[data-option-field]').slideUp(300, function() {
			$(this).closest('.form-row').find('[data-option-field]').find('input').attr('required', false);
			$('input[required]').trigger('input');
			});
		}
	});

	let childForm = $('[data-count-contain]').find('.form-group_hidden-content');

	$(document).on('input', '[data-count]', function() {
		let temp = $(this).val();
		let i = 0;

		$('.form-group_hidden-wrapper').html('');

		temp = parseInt(temp);

		if (temp > 0) {
			for ( i ; i < temp; i++) {
				$('.form-group_hidden-wrapper').append(childForm.clone());
			}
			$('.form-group_hidden-wrapper').slideDown(300);
		}
	});
});