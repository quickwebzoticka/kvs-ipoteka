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

	$('[data-name]').inputmask({"mask": "Aa{1,}[-Aa{1,}]", showMaskOnHover: false, greedy: false});
	$('[data-date]').inputmask({"mask": "99.99.9999", showMaskOnHover: false});
	$('[data-phone]').inputmask({"mask": "+7 (999) 999-9999", showMaskOnHover: false});
	$('[data-count]').inputmask({"mask": "9[9]", showMaskOnHover: false});
	$('[data-period]').inputmask({"mask": "9[9] год(а)/лет", showMaskOnHover: false});
	$('[data-passport]').inputmask({"mask": "9999 999999", showMaskOnHover: false});
	$('[data-inn]').inputmask({"mask": "999999999999", showMaskOnHover: false});
	$('[data-snils]').inputmask({"mask": "999 999 999 99", showMaskOnHover: false});
	$('[data-email]').inputmask();
	$('[data-passport-date]').inputmask({"mask": "99.99.9999", showMaskOnHover: false});
	$('[data-passport-cod]').inputmask({"mask": "999-999", showMaskOnHover: false});

	$('select').SumoSelect();

	$('[data-hidden-content]').hide();
	$('[data-count-contain]').hide();
	$('[data-option-field]').hide();
	$('[data-hidden-radio-content]').hide();

	let anketa = $('.form-tabs-container').clone();
	let link = $('.form-tabs-nav__link-add').clone();

	anketa.removeClass('active');
	link.removeClass('active');

	$('.form-tabs-nav__link-add').remove();

	$(document).on('click', '.form-tabs-nav__btn', function() {
		let count = $('.form-tabs-nav__link').length;


		if ($('.form-tabs-nav__link-add').length < 3) {
			$('.form-tabs-nav__link-wrapper').append(link.clone());
			$('.form-tabs-container-wrapper').append(anketa.clone());

			$('.form-tabs-container').eq(count).find('input').each(function(index) {

				if (!$(this).attr('id') == 0) {

					let temp = $(this).attr('id');

					$(this).attr('id', `${temp}-${count}`);
					$(this).siblings('label').attr('for', `${temp}-${count}`);
				}
			})

			$('.form-tabs-container').eq(count).find('input[type="radio"]').each(function(index) {
				console.log($(this).attr('name'))
				if (!$(this).attr('name') == 0) {

					let temp = $(this).attr('name');

					$(this).attr('name', `${temp}-${count}`);
					// $(this).siblings('label').attr('for', `${temp}-${count}`);
				}
			})
		}
		
	});

	$(document).on('click', '.form-tabs-nav__link:not(.active)', function() {
		$('.form-tabs-nav__link').removeClass('active');
		$(this).addClass('active');

		let thisIndex = $(this).index('.form-tabs-nav__link');

		console.log(thisIndex);

		$('.form-tabs-container').removeClass('active').eq(thisIndex).addClass('active');
	});


	$(document).on('change', '[name="ЦельКредита"]', function() {
		let temp = $(this).index('[name="ЦельКредита"]')

		if (temp == 0) return $('.cost').text('Стоимость ОН в новостройке')
		if (temp == 1) return $('.cost').text('Стоимость ОН в готовой недвижимости')
		if (temp == 2) return $('.cost').text('Стоимость коммерческой недвижимости')


	});


	$(document).on('change', '[name="ТипОбразования"]', function() {

		console.log($(this));

		console.log($(this).closest('.form-row'));

		let trigger = $(this).closest('.form-row').find('[data-education-trigger]');
		let science = $(this).closest('.form-row').find('[data-science]');
		let scienceWrapper = $(this).closest('.form-row').find('.form-group__check_sd');



		if (trigger.prop('checked')) {
			science.prop('disabled', 0);
			scienceWrapper.removeClass('disabled');
		} else {
			science.prop('disabled', 1).prop('checked', 0);
			scienceWrapper.addClass('disabled');
		}
	});

	$(document).on('change', '[data-passport-date]', function(){
			let val = $(this).val();
			let date = new Date();

			let currentYear = date.getFullYear();
			let currentMonth = date.getMonth();
			let currentDay = date.getDate();

			val = val.split('.');

			if (val[0] > 31) {
				val[0] = 31;
			}

			if (val[1] > 12) {
				val[1] = 12;
			}

			if (val[2] > currentYear) {
				val[2] = currentYear;
			}

			val = val.join('.');

			$(this).val(val);
	});


	$(document).on('change', '[data-date]', function(){
			let val = $(this).val();

			val = val.split('.');

			if (val[0] > 31) {
				val[0] = 31;
			}

			if (val[1] > 12) {
				val[1] = 12;
			}

			if (val[2] > 2001) {
				val[2] = 2001;
			}

			val = val.join('.');

			$(this).val(val);
	});

	$(document).on('change', '[data-credit-main]', function() {
		if ($('[data-credit-main]').val().length > 1) {

			$('[data-credit-first]').attr('disabled', false);
			$('[data-credit-procent]').attr('disabled', false);
			$('[data-credit-summ]').attr('disabled', false);
			return false;

		} 
		if (parseInt($('[data-credit-summ]').val()) == 0) {

			$('[data-credit-first]').val('');
			$('[data-credit-procent]').val('');
			$('[data-credit-summ]').val('');


			$('[data-credit-first]').attr('disabled', true);
			$('[data-credit-procent]').attr('disabled', true);
			$('[data-credit-summ]').attr('disabled', true);

		}
	});

	const clearInputsName = function () {
		$('#main-name-surname').val('');
		$('#main-name-name').val('');
		$('#main-name-patronym').val('');
	}

	const copyName = function() {
		let tempMainName = [];

		tempMainName.push($('#main-name-1').val());
		tempMainName.push($('#main-name-2').val());
		tempMainName.push($('#main-name-3').val());

		$('#main-name-surname').val(tempMainName[0]);
		$('#main-name-name').val(tempMainName[1]);
		$('#main-name-patronym').val(tempMainName[2]);
	}

	$(document).on('change', '#maternity-capital-usage-PV', function() {
		if ($(this).prop('checked', true)) {
			$('[data-hidden-radio-content]').slideDown(300);
			return false;
		}
	});
	$(document).on('change', '#maternity-capital-usage-time', function() {
		if ($(this).prop('checked', true)) {
			$('[data-hidden-radio-content]').slideUp(300);
			return false;
		}
	});

	$(document).on('change', '[data-credit-summ]', function () {
		if (parseInt($('[data-credit-main]').val()) > 0) {
			let tempCredit = $(this).val();
			let tempTotal = $('[data-credit-main]').val();
			let tempFirst = $('[data-credit-first]').val();
			let tempProcent;

			tempCredit = tempCredit || 0;

			tempCredit = tempCredit.replace(/\s+/g,'');
			tempCredit = parseInt(tempCredit);

			tempTotal = tempTotal.replace(/\s+/g,'');
			tempTotal = parseInt(tempTotal);

			if (tempCredit > tempTotal) {
					$(this).val('Сумма кредита не может быть больше стоимости ОН');
					return false;
			}

			tempFirst = tempTotal - tempCredit;


			tempProcent = (tempFirst * 100) / tempTotal;

			tempProcent = Math.round(tempProcent);


			$('[data-credit-first]').val(`${tempFirst.toLocaleString()} руб.`);


			if (tempProcent >= 0) {
				$('[data-credit-procent]').val(`${tempProcent} %`);
				return false;
			} else {
				$(this).val(`0`);
				$('[data-credit-procent]').val(`0 %`);
				return false;
			}
		}
	});

	$(document).on('change', '[data-military-summ]', function () {
		if (parseInt($('[data-credit-main]').val()) > 0) {
			let tempFirst = $(this).val();
			let tempTotal = $('[data-credit-main]').val();
			let tempProcent;

			tempFirst = tempFirst.replace(/\s+/g,'');
			tempFirst = parseInt(tempFirst);

			tempTotal = tempTotal.replace(/\s+/g,'');
			tempTotal = parseInt(tempTotal);

			if (tempFirst > tempTotal) {
					$(this).val('НИС не может быть больше стоимости ОН');
					return false;
			}

			tempProcent = (tempFirst * 100) / tempTotal;
			tempProcent = Math.round(tempProcent);

			if (tempProcent > 0) {
				$('[data-military-procent]').val(`${tempProcent} %`);
				return false;
			} else {
				$(this).val(`0`);
				$('[data-military-procent]').val(`0 %`);
				return false;
			}
		}
	});

	$(document).on('change', '[data-military-procent]', function() {
		if (parseInt($('[data-credit-main]').val()) > 0) {
			let tempFirst ;
			let tempTotal = $('[data-credit-main]').val();
			let tempProcent = $(this).val();

			tempProcent = tempProcent.replace(/\s+/g,'');
			tempProcent = parseInt(tempProcent);

			tempTotal = tempTotal.replace(/\s+/g,'');
			tempTotal = parseInt(tempTotal);

			if (tempProcent > 100) {
					$(this).val('Не может быть больше 100%');
					return false;
			}

			tempFirst = (tempTotal / 100) * tempProcent;
			tempFirst = Math.round(tempFirst);

			if ($(this).val() == 0 || $(this).val().length <= 0) {
				$(this).val(`0 %`);
				$('[data-military-summ]').val(`0 руб.`);
				return false;
			}

			$(this).val(`${tempProcent} %`);
			$('[data-military-summ]').val(`${tempFirst.toLocaleString()} руб.`);
		}
	});

	$(document).on('change', '[data-subsidy-summ]', function () {
		if (parseInt($('[data-credit-main]').val()) > 0) {
			let tempFirst = $(this).val();
			let tempTotal = $('[data-credit-main]').val();
			let tempProcent;

			tempFirst = tempFirst.replace(/\s+/g,'');
			tempFirst = parseInt(tempFirst);

			tempTotal = tempTotal.replace(/\s+/g,'');
			tempTotal = parseInt(tempTotal);

			if (tempFirst > tempTotal) {
					$(this).val('Размер субсидии не может быть больше стоимости ОН');
					return false;
			}

			tempProcent = (tempFirst * 100) / tempTotal;
			tempProcent = Math.round(tempProcent);

			if (tempProcent > 0) {
				$('[data-subsidy-procent]').val(`${tempProcent} %`);
				return false;
			} else {
				$(this).val(`0`);
				$('[data-subsidy-procent]').val(`0 %`);
				return false;
			}
		}
	});

	$(document).on('change', '[data-subsidy-procent]', function() {
		if (parseInt($('[data-credit-main]').val()) > 0) {
			let tempFirst ;
			let tempTotal = $('[data-credit-main]').val();
			let tempProcent = $(this).val();

			tempProcent = tempProcent.replace(/\s+/g,'');
			tempProcent = parseInt(tempProcent);

			tempTotal = tempTotal.replace(/\s+/g,'');
			tempTotal = parseInt(tempTotal);

			if (tempProcent > 100) {
					$(this).val('Не может быть больше 100%');
					return false;
			}

			tempFirst = (tempTotal / 100) * tempProcent;
			tempFirst = Math.round(tempFirst);

			if ($(this).val() == 0 || $(this).val().length <= 0) {
				$(this).val(`0 %`);
				$('[data-subsidy-summ]').val(`0 руб.`);
				return false;
			}

			$(this).val(`${tempProcent} %`);
			$('[data-subsidy-summ]').val(`${tempFirst.toLocaleString()} руб.`);
		}
	});

		$(document).on('change', '[data-maternity-summ]', function () {
		if (parseInt($('[data-credit-main]').val()) > 0) {
			let tempFirst = $(this).val();
			let tempTotal = $('[data-credit-main]').val();
			let tempProcent;

			tempFirst = tempFirst.replace(/\s+/g,'');
			tempFirst = parseInt(tempFirst);

			tempTotal = tempTotal.replace(/\s+/g,'');
			tempTotal = parseInt(tempTotal);

			if (tempFirst > tempTotal) {
					$(this).val('Размер материнского капитала не может быть больше стоимости ОН');
					return false;
			}

			if (tempFirst > 453026) {
					$(this).val('Размер материнского капитала не может быть больше 453 026');
					return false;
			}

			tempProcent = (tempFirst * 100) / tempTotal;
			tempProcent = Math.round(tempProcent);

			if (tempProcent > 0) {
				$('[data-maternity-procent]').val(`${tempProcent} %`);
				return false;
			} else {
				$(this).val(`0`);
				$('[data-maternity-procent]').val(`0 %`);
				return false;
			}
		}
	});

	$(document).on('change', '[data-maternity-procent]', function() {
		if (parseInt($('[data-credit-main]').val()) > 0) {
			let tempFirst ;
			let tempTotal = $('[data-credit-main]').val();
			let tempProcent = $(this).val();

			tempProcent = tempProcent.replace(/\s+/g,'');
			tempProcent = parseInt(tempProcent);

			tempTotal = tempTotal.replace(/\s+/g,'');
			tempTotal = parseInt(tempTotal);

			if (tempProcent > 100) {
					$(this).val('Не может быть больше 100%');
					return false;
			}

			tempFirst = (tempTotal / 100) * tempProcent;
			tempFirst = Math.round(tempFirst);

			if (tempFirst > 453026) {
					$('[data-maternity-summ]').val('Размер МСК не может быть больше 453 026 руб.');
					return false;
			}

			if ($(this).val() == 0 || $(this).val().length <= 0) {
				$(this).val(`0 %`);
				$('[data-maternity-summ]').val(`0 руб.`);
				return false;
			}

			$(this).val(`${tempProcent} %`);
			$('[data-maternity-summ]').val(`${tempFirst.toLocaleString()} руб.`);
		}
	});

	$(document).on('change', '[data-credit-first]', function() {
		if (parseInt($('[data-credit-main]').val()) > 0) {
			let tempFirst = $(this).val();
			let tempTotal = $('[data-credit-main]').val();
			let tempCredit = $('[data-credit-summ]').val();
			let tempProcent;

			tempCredit = tempCredit || 0;

			tempFirst = tempFirst.replace(/\s+/g,'');
			tempFirst = parseInt(tempFirst);

			tempTotal = tempTotal.replace(/\s+/g,'');
			tempTotal = parseInt(tempTotal);

			if (tempFirst > tempTotal) {
					$(this).val('Первоначальный взнос не может быть больше стоимости ОН');
					return false;
			}

			tempCredit = tempTotal - tempFirst;


			tempProcent = (tempFirst * 100) / tempTotal;

			tempProcent = Math.round(tempProcent);


			$('[data-credit-summ]').val(`${tempCredit.toLocaleString()} руб.`);


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
		if (parseInt($('[data-credit-main]').val()) > 0) {
			let tempProcent = $(this).val();
			let tempTotal = $('[data-credit-main]').val();
			let tempCredit = $('[data-credit-summ]').val();
			let tempFirst;

			tempCredit = tempCredit || 0;

			tempProcent = tempProcent.replace(/\s+/g,'');
			tempProcent = parseInt(tempProcent);

			if (tempProcent > 100) {
				$(this).val('Не может быть больше 100%');
				return false;
			}

			tempTotal = tempTotal.replace(/\s+/g,'');
			tempTotal = parseInt(tempTotal);

			tempFirst = (tempTotal / 100) * tempProcent;

			tempCredit = tempTotal - tempFirst;

			tempFirst = Math.round(tempFirst);
			tempFirst = tempFirst.toLocaleString('ru');

			$('[data-credit-summ]').val(`${tempCredit.toLocaleString()} руб.`);

			if ($(this).val() == 0 || $(this).val().length <= 0) {
				$(this).val(`0 %`);
				$('[data-credit-first]').val(`0 руб.`);
				return false;
			}

			$(this).val(`${tempProcent} %`);
			$('[data-credit-first]').val(`${tempFirst} руб.`);
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
			$(this).val(`${temp} руб.`)
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
			$(document).find('[data-credit-summ]').val('');
		}
		if ($(this).closest('.form-group__text').siblings().find('[data-credit-first]').length > 0) {
			$(this).closest('.form-group__text')
				   .siblings()
				   .find('[data-credit-first]')
				   .val('')
				   .closest('.form-group__text')
				   .removeClass('active');
			$(document).find('[data-credit-summ]').val('');
		}
		if ($(this).closest('.form-group__text').find('[data-credit-summ]').length > 0) {
			$(this).closest('.form-group__text')
				   .siblings()
				   .find('[data-credit-summ]')
				   .val('')
				   .closest('.form-group__text')
				   .removeClass('active');
			$(document).find('[data-credit-first]').val('');
			$(document).find('[data-credit-procent]').val('');
		}
	});

	$(document).on('input', 'input[required]', function() {
		let countInputs = $(document).find('.form-block.active').find('input[required]').length || 0;
		let countFilledInputs = 0;

		$(document).find('.form-block.active').find('input[required]').each(function(){
			if ($(this).val()) {
				if(this.hasAttribute('data-date') 
				|| this.hasAttribute('data-phone') 
				|| this.hasAttribute('data-count') 
				|| this.hasAttribute('data-period')
				|| this.hasAttribute('data-passport')
				|| this.hasAttribute('data-inn')
				|| this.hasAttribute('data-snils')
				|| this.hasAttribute('data-email')) {
					if($(this).inputmask("isComplete")) {
						return countFilledInputs++;
					}
					return false;
				}
				return countFilledInputs++;
			}
		});
		let compare = countInputs == countFilledInputs;
		if (compare) {
			$(this).closest('.form-block').find('.form-btn.form-btn__next').addClass('active');
		} else {
			$(this).closest('.form-block').find('.form-btn.form-btn__next').removeClass('active');
		}
	});

	const nextPage = () => {

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

	}
	$(document).on('click', '.form-btn__next_static', nextPage);
	$(document).on('click', '.form-btn.form-btn__next.active', nextPage);

	$(document).on('click', '.form-btn.form-btn__prev', function() {
		let temp = $('.form-block.active').index('.form-block');
		let winodwOffsetTop = $('.wrapper').offset().top;

		if (temp <= 0) {
			return false;
		} else {
			$('.form-block').eq((temp - 1)).addClass('active');
			$('input[required]').trigger('input');
		}
		$('.form-block').eq(temp).removeClass('active');
		$('html, body').animate({scrollTop: winodwOffsetTop}, 1000);
	});

	$(document).on('change', '[data-hidden]', function() {
		console.log(1);
		if ($(this).prop('checked')) {
			console.log(12);
			$(this).closest('.form-group_hidden').find('.form-group__text').find('input').attr('required', true);
			$(this).closest('.form-group_hidden').find('[data-hidden-content]').slideDown(300);
			$('input[required]').trigger('input');
		} else {
			console.log(22);
			$(this).closest('.form-group_hidden').find('[data-hidden-content]').slideUp(300, function() {
			$(this).closest('.form-group_hidden').find('.form-group__text').find('input').attr('required', false);
			$('input[required]').trigger('input');
			});
		}
	});

	$(document).on('change', '[data-close]', function() {
		console.log(1);
			if ($(this).prop('checked')) {
				console.log(12);
				console.log($(this).closest('.form-group_hidden').find('[data-hidden-content]'))
				$(this).closest('.form-group_hidden').find('.form-group__text').slideUp(300, function() {
				$(this).closest('.form-group_hidden').find('.form-group__text').find('input').attr('required', false);
				$('input[required]').trigger('input');
				});
			} else {
				console.log(22);
				$(this).closest('.form-group_hidden').find('.form-group__text').find('input').attr('required', true);
				$(this).closest('.form-group_hidden').find('.form-group__text').slideDown(300);
				$('input[required]').trigger('input');
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

			let childrenForms = $('[data-children-form]');

			childrenForms.each(function(index, element) {
				console.log(element)
				let temp = $(element).find('input');
				temp.eq(0).attr('name', `child-name-${index}`);
				temp.eq(1).attr('name', `child-birth-date-children-${index}`);
			})
		}
	});

	$('[data-phone-city]').on('keydown', function(e){
		let temp = e.key;
		let tempLength = $(this).val().split('_').length - 1;

		if (temp !== "9" && tempLength == 0) {
				$(this).inputmask('');			
		}
		if (temp == "9" && $(this).val().length == 0) {
			$(this).inputmask({"mask": "+7 (999) 999-9999", showMaskOnHover: false,});
		}
	});

	$(document).on('change', '[data-active]', function() {
		let trigger = 0;

		$('[data-active]').each(function(index, element) {
			if (element.checked) {
				++trigger;
			}
		});

		if (trigger) {
			$('.form-group__active').slideDown(300);
		} else {
			$('.form-group__active').slideUp(300);
		}

	});


	$(document).on('change', '[data-credit-trigger]', function() {
		let temp = $(this).index('[data-credit-trigger]');

		console.log(temp);


		if (temp == 0) {
			$('.form-hidden-content').slideUp(300);
		} else {
			$('.form-hidden-content').slideDown(300);			
		}
	});












	$(document).on('submit', '#form-ipoteka-main', function() {
		var form = $(this);
        $.ajax({
          type: form.attr('method'),
          url: form.attr('action'),
          data: form.serialize()
        }).done(function() {
        	//
        	// Тут будет вызов попапа с удачной отправкой
        	//
          console.log('Ушла ипотека')
        }).fail(function() {
        	//
        	// Тут будет вызов попапа с неудачей
        	//
          console.log('Осталась ипотека');
        });
        e.preventDefault(); 
	});
});