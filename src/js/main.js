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


function init() {

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

}

	init();

	$('select').SumoSelect();

	$('[data-hidden-content]').hide();
	$('[data-count-contain]').hide();
	$('[data-option-field]').hide();
	$('[data-option-field-1]').hide();
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
			$('.form-tabs-container-wrapper').append(anketa.clone().addClass("soz"));
			$(document).find('.soz').find('.form-row.children-wrapper').remove();



			$('.form-tabs-container').eq(count).find('input').each(function(index) {

				if (!$(this).attr('id') == 0) {

					let temp = $(this).attr('id');

					$(this).attr('id', `${temp}-${count}`);
					$(this).siblings('label').attr('for', `${temp}-${count}`);
				}
			});

			$('.form-tabs-container').eq(count).find('input[type="radio"]').each(function(index) {
				console.log($(this).attr('name'))
				if (!$(this).attr('name') == 0) {

					let temp = $(this).attr('name');

					$(this).attr('name', `${temp}-${count}`);
				}
			});

			init();
			$('input[required]').trigger('input');
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

		if (temp == 0) return $('.cost').text('Стоимость квартиры в новостройке')
		if (temp == 1) return $('.cost').text('Стоимость квартиры в готовой недвижимости')
		if (temp == 2) return $('.cost').text('Стоимость коммерческой недвижимости')


	});


	$(document).on('change', '[data-add-name="ТипОбразования"]', function() {

		let trigger = $(this).closest('.form-row').find('[data-education-trigger]');
		let science = $(this).closest('.form-row').find('[data-science]');
		let scienceWrapper = $(this).closest('.form-row').find('.form-group__check_sd');

		console.log(11);



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
			let date = new Date();

			let currentYear = date.getFullYear();

			let maxAge = currentYear - 75;
			let minAge = currentYear - 18;

			val = val.split('.');

			if (val[0] > 31) {
				val[0] = 31;
			}

			if (val[1] > 12) {
				val[1] = 12;
			}

			if (val[2] > minAge) {
				val[2] = 2001;
			}

			if (val[2] < maxAge) {
				val[2] = maxAge;
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
		console.log(`${compare} : ${countInputs} : ${countFilledInputs}`);
		if (compare || (countInputs == 0 && countFilledInputs == 0)) {
			console.log(1);
			$('.form-block.active').find('.form-btn.form-btn__next').addClass('active');
		} else {
			console.log(2);
			$('.form-block.active').find('.form-btn.form-btn__next').removeClass('active');
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
		if ($(this).prop('checked')) {
			$(this).closest('.form-block__content').find('[data-mono]').prop('checked', false);
			$(this).prop('checked', true);
			$(this).closest('.form-block__content').find('[data-hidden-content]').slideUp(300);
			$(this).closest('.form-block__content').find('.form-group_hidden').find('.form-group__text').find('input').attr('required', false);
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

	$(document).on('change', '[data-close]', function() {
			if ($(this).prop('checked')) {
				$(this).closest('.form-group_hidden').find('.form-group__text').slideUp(300, function() {
				$(this).closest('.form-group_hidden').find('.form-group__text').find('input').attr('required', false);
				$('input[required]').trigger('input');
				});
			} else {
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
			$(this).closest('.form-chunk-wrapper-item').find('[data-option-field]').find('input').each(function() {
				$(this).attr('required', true);
			})
			$(this).closest('.form-chunk-wrapper-item').find('[data-option-field]').slideDown(300);
			$('input[required]').trigger('input');
		} else {
			$(this).closest('.form-chunk-wrapper-item').find('[data-option-field]').slideUp(300, function() {
			$(this).closest('.form-chunk-wrapper-item').find('[data-option-field]').find('input').each(function() {
				$(this).attr('required', false);
			});
			$('input[required]').trigger('input');
			});
		}
	});

	$(document).on('change', '[data-option-1]', function() {
		if ($(this).prop('checked')) {
			$(this).closest('.form-row').find('[data-option-field-1]').find('input').each(function() {
				$(this).attr('required', true);
			})
			$(this).closest('.form-row').find('[data-option-field-1]').slideDown(300);
			$('input[required]').trigger('input');
		} else {
			$(this).closest('.form-row').find('[data-option-field-1]').slideUp(300, function() {
			$(this).closest('.form-row').find('[data-option-field-1]').find('input').each(function() {
				$(this).attr('required', false);
			});
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

			init();

			$('.form-group_hidden-wrapper').slideDown(300);

			let childrenForms = $('[data-children-form]');

			childrenForms.each(function(index, element) {
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
		if ($(this).prop('checked')) {
			$(this).closest('.data-active-wrapper').find('.form-group__active').slideDown(300, function() {
				$(this).closest('.data-active-wrapper').find('.form-group__active').find('input[type="text"]:not([data-procenty])').each(function() {
					$(this).attr('required', true);
				});
				$('input[required]').trigger('input');
			});
		} else {
			$(this).closest('.data-active-wrapper').find('.form-group__active').slideUp(300, function() {
				$(this).closest('.data-active-wrapper').find('.form-group__active').find('input[type="text"]').each(function() {
					$(this).attr('required', false);
				});
				$('input[required]').trigger('input');
			});
		}
	});


	$(document).on('change', '[data-step-name="Активы"] label', function() {

	});


	let creditHistory = $('.form-content-credit').clone();

	$('.form-content-credit').remove();


	$(document).on('change', '[data-credit-trigger]', function(e) {
		let tempIndex = $(this).index('[data-credit-trigger]');
		let tempWrapper = $(this).closest('.form-block__content').find('.form-hidden-content');

		if (!tempIndex == 0 && $(this).prop('checked')) {
			$('[data-credit-trigger]').eq(0).prop('checked', false);
			let tempContent = creditHistory.clone();

			
			tempContent.find('input[type="radio"]').each(function() {
				let tempName = $(this).attr('id');
				$(this).attr('id', `${tempName}-${tempIndex}`);
				$(this).siblings('label').attr('for', `${tempName}-${tempIndex}`);
			});

			if (tempIndex == 1) {
				tempContent.find('.form-content-credit__head').text('Ипотечный кредит');
				tempContent.attr('data-title', `Ипотечный кредит`);
				tempContent.attr('data-credit-type', `${tempIndex}`);

			}

			if (tempIndex == 2) {
				tempContent.find('.form-content-credit__head').text('Автокредит');
				tempContent.attr('data-title', `Автокредит`);
				tempContent.attr('data-credit-type', `${tempIndex}`);

			}

			if (tempIndex == 3) {
				tempContent.find('.form-content-credit__head').text('Потребительский кредит');
				tempContent.attr('data-title', `Потребительский кредит`);
				tempContent.attr('data-credit-type', `${tempIndex}`);

			}

			if (tempIndex == 4) {
				tempContent.find('.form-content-credit__head').text('Кредитная карта');
				tempContent.attr('data-title', `Кредитная карта`);
				tempContent.attr('data-credit-type', `${tempIndex}`);
			}

			tempWrapper.append(tempContent);
			tempWrapper.slideDown(300);
			$('input[required]').trigger('input');
		}

		if (tempIndex !== 0 && !$(this).prop('checked')) {
			$(document).find(`[data-credit-type="${tempIndex}"]`).slideUp(300, function() {
				$(this).remove();
				$('input[required]').trigger('input');
				let count = 0;

				$('[data-credit-trigger]').each(function() {
					if ($(this).prop('checked')) {
						++count;
					}
				});

				if (!count) {
					$('[data-credit-trigger]').eq(0).prop('checked', true);
				}
			})
		}

		if (tempIndex == 0 && $(this).prop('checked')) {
			tempWrapper.slideUp(300, function() {
				$('.form-content-credit').remove();
				$('input[required]').trigger('input');
			});
			$('[data-credit-trigger]').prop('checked', false);
			$(this).prop('checked', true);

			
			// $('.form-block.active').find('.form-btn.form-btn__next').addClass('active');
		}

		if (tempIndex == 0 && !$(this).prop('checked')) {
			tempWrapper.slideUp(300, function() {
				$('.form-content-credit').remove();
			});
			$('[data-credit-trigger]').prop('checked', false);
			$(this).prop('checked', true);

			$('input[required]').trigger('input');
		}
	});


	$(document).on('change', '[data-procenty]', function() {
		let val = $(this).val()

		val = val.replace(/\s+/g,'');
		val = parseInt(val);

		if (val > 100) {
			$(this).val('Не может быть больше 100%');
			return false;
		}

		$(this).val(`${val} %`);
		
	});


	$(document).on('change', 'input[type="file"]', function() {
		let titleWrapper = $(this).closest('.form-group__file-label');

		for (let i = 0; i < this.files.length; i++) {
			titleWrapper.append(`<div class="file-uploaded">${this.files[i].name}</div>`)
		}
		
	});



	$(document).on('click', '.form-chunk-btn', function() {
		let item = $(this).closest('.form-chunk').find('.form-chunk-wrapper-item').eq(0).clone();
		let index = $(this).closest('.form-chunk').find('.form-chunk-wrapper-item').length;

		item.find('input').each(function() {
			$(this).val('');
			let oldID = $(this).prop('id');
			let oldName = $(this).prop('name');
			if ($(this).prop('type') == 'radio') {
				$(this).prop('id', `${oldID}--${index}`);
				$(this).prop('name', `${oldName}--${index}`);
				$(this).siblings('label').prop('for', `${oldID}--${index}`);
			}
		});

		$(this).closest('.form-chunk').find('.form-chunk-wrapper').append(item.clone())
		$('input[required]').trigger('input');
	});


//------------------------------------------------------------ILIYA-CODER-IN-ACTIVE-----------------------------------



function getChildrenInfo() {
        var massDopData = {};
        var data = $('.form-block[data-step-name="ЛичныеДанные"]'),
            children = data.find(".form-tabs-container:not(.soz) .children-wrapper");

        massDopData = {};
        var item = {};
        var i = 0;
        children.find("[data-children-form]").each(function () {
            $(this).find("input").each(function () {
                var namefild = $(this).attr("name"), value = $(this).val();
                if(value){
                    item[namefild] = value;
                }else{
                    item = false;
                }
            });
            if(item){
                massDopData[i] = item;
                item = {};
                i++;
            }
        });
        return massDopData;
    }

    function getDocument() {
        /*Документы START*/
        var formDataFile = new FormData();
        data = $('.form-block[data-step-name="Документы"]');
        data.find('input[type="file"]').each(function () {
            var name = $(this).attr("name");
            var filesArray = this.files;
            if(filesArray.length){
                $.each(filesArray,function (index,item) {
                    formDataFile.append(name+"["+index+"]", item);
                });
            }
        });
        return formDataFile;
        /*Документы END*/
    }

    function getData(obj) {
        var namefild = $(obj).attr("name");
        if(!namefild) return false;
        var type = $(obj).attr("type");
        var result = [];
        switch(type){
            case "checkbox":
                if ($(obj).prop("checked")) {
                    result['data'] = 1;
                }else{
                    result['data'] = 0;
				}
                break;
            case "radio":
                if($(obj).prop("checked")) {
                    result['data'] = $(obj).val();
                }else{
                	return false;
				}
            break;
            default:
                result['data'] = $(obj).val();
            break;
        }
        result['name'] = namefild;
        return result;
    }

    function readForm(){
        /*Чтение данных START*/
        var massData = {}
        $(".form-block").each(function () {

            if($(this).data("step-name") == "Документы") return;
            if($(this).data("step-name") == "ЛичныеДанные") return;
            if($(this).data("step-name") == "КредитнаяИстори") return;
            if($(this).data("step-name") == "Активы") return;

            nameStep = $(this).data("step-name");
            massData[nameStep] = {};
            $(this).find(".form-row:not(.children-wrapper):not([data-group]) input, .form-row:not(.children-wrapper):not([data-group]) select").each(function () {
                var itemData = getData(this);
                if(itemData !== false) {
                    massData[nameStep][itemData['name']] = itemData['data'];
                }
            })
        });
        /*Чтение данных END*/

        /*ЛичныеДанные START*/
        massData = {};
        nameStep = "ЛичныеДанные";
        massData[nameStep] = {};
        var data = $('.form-block[data-step-name="ЛичныеДанные"]');
        data.find(".form-tabs-container:not(.soz) .form-row:not(.children-wrapper):not([data-group]) input, .form-tabs-container:not(.soz) .form-row:not(.children-wrapper):not([data-group]) select").each(function () {
          var itemData = getData(this);
          if(itemData !== false) {
              massData[nameStep][itemData['name']] = itemData['data'];
          }
        });
        console.log(massData);
        /*ЛичныеДанные END*/
		/*Кредиты START*/
		  nameStep = "КредитнаяИстори";
		  massData[nameStep] = {};
		  $("[data-credit-type]").each(function(key,item){
			var name = $(this).data("title");
			massData[nameStep][key] = {};
			massData[nameStep][key]['ВидКредита'] = name;
			$(this).find("input,select").each(function () {
                var itemData = getData(this);
                if(itemData !== false) {
                    massData[nameStep][itemData['name']] = itemData['data'];
                }
			})
		  })
		/*Кредиты END*/
		/*Активы START*/
			nameStep = "Активы";
			massData[nameStep] = {};
			data = $('.form-block[data-step-name="Активы"]');
			/*Недвижимость START*/
			$(data).find(".data-active-wrapper").each(function(){
				var typecredit = $(this).find(".form-group__check input").attr("name");
				var item = $(this).find(".visible-active-wrapper .form-chunk-wrapper-item");
				if(item.length) {
                    massData[nameStep][typecredit] = {};
                    $.each(item,function (key,item) {
                        massData[nameStep][typecredit][key] = {};
                        $(this).find("input,select").each(function () {
                            var itemData = getData(this);
                            if(itemData !== false) {
                                massData[nameStep][typecredit][key][itemData['name']] = itemData['data'];
                            }
                        });
                    });
				}
			});
			/*Недвижимость END*/
			/*Транспорт в собственности START*/
			var avtoinput = $("#auto-property");
       		var contaner = $(avtoinput).parents(".form-row");
        	typecredit = $(avtoinput).attr("name");
        	massData[nameStep][typecredit] ={};
            contaner.find(".form-chunk-wrapper-item").each(function (key,item) {
                massData[nameStep][typecredit][key] = {};
                $(this).find("input,select").each(function () {
                    var itemData = getData(this);
                    if(itemData !== false) {
                        massData[nameStep][typecredit][key][itemData['name']] = itemData['data'];
                    }
				});
            });
			/*Транспорт в собственности END*/
		/*Активы END*/
		/*Созаемщики START*/
			nameStep = "Созаемщики";
			massData[nameStep] = {};
			data = $('.form-block[data-step-name="ЛичныеДанные"] .form-tabs-container.soz');
			$.each(data,function (key,value) {
				massData[nameStep][key] = {};
				$(this).find(".form-row:not(.children-wrapper):not([data-group]) input,.form-row:not(.children-wrapper):not([data-group]) select").each(function () {
                    var itemData = getData(this);
                    if(itemData !== false) {
                        massData[nameStep][key][namefild] = itemData;
					}
				});
				$(this).find("[data-group]").each(function () {
					var stepName = nameStep;
					var groupName = $(this).data("group");
					if(!massData[stepName][key][groupName]) massData[stepName][key][groupName] = {};
					$(this).find(" input, select").each(function () {
                        var itemData = getData(this);
                        if(itemData !== false) {
                            massData[nameStep][key][itemData['name']] = itemData['data'];
                        }
					});
				});
			})
		/*Созаемщики END*/
    	/*Чтение групп*/
		$("[data-group]").each(function () {
		  var stepName = $(this).parents(".form-block").data("step-name");
		  var groupName = $(this).data("group");
            var type = "";
            if(!massData[stepName][groupName]) massData[stepName][groupName] = {};
            $(this).find("input,select").each(function () {
                var namefild = $(this).attr("name");
                var type = $(this).attr("type");
                if(namefild) {
                      inputgroup = $(this).attr('data-input-group');
					  if (typeof inputgroup !== typeof undefined && inputgroup !== false) {
                          	// Запись значений в строку сейчас работает тольк для checkbox все остальные параметры
                          	// Будут обрабатываться как обычно
							id = $(this).attr("id");
							switch (type) {
							  	case "checkbox":
									var label = $("label[for="+id+"]");
									if(id && label.length && $(this).prop('checked')) {
										str = $(label).text().replace(/\s+/g, '');
										massData[stepName][groupName][inputgroup] += massData[stepName][groupName][inputgroup] ? str : ", " + str;
									}
								break;
								default:
                                    massData[stepName][groupName][namefild] = $(this).val();
								break;
							}
					  }else{
                        switch(type){
                            case "checkbox":
                                if ($(this).prop("checked")) {
                                    result = 1;
                                }else{
                                    result = 0;
                                }
                                break;
                            case "radio":
                                if($(this).prop("checked")) {
                                    result = $(this).val();
                                }
                                break;
                            default:
                                result = $(this).val();
                            break;
                        }
						massData[stepName][groupName][namefild] = result;
					  }
                }
            });
        });
        /*Чтение групп*/
		var children = getChildrenInfo();
	    if(children){
	      massData["ЛичныеДанные"]["Дети"] = children;
	    }
	    return massData;
  	}

	function mainReadForm() {
		var formData = getDocument();
		jsondata = JSON.stringify(readForm());
		formData.append('data', jsondata);
		return formData;
	}
    $.ajax({
        type: form.attr('method'),
        url: form.attr('action'),
        data: mainReadForm(),
        dataType: 'json',
        cache: false,
        contentType: false, // важно - убираем форматирование данных по умолчанию
        processData: false, // важно - убираем преобразование строк по умолчанию
    })
	$(document).on('submit', '#form-ipoteka-main', function() {
		var form = $(this);
		$.ajax({
		  type: form.attr('method'),
		  url: form.attr('action'),
		  data: mainReadForm(),
		  dataType: 'json',
		  cache: false,
		  contentType: false, // важно - убираем форматирование данных по умолчанию
		  processData: false, // важно - убираем преобразование строк по умолчанию
		}).
		done(function() {
			alert('Данные отправлены');
		}).fail(function() {
			alert('Произошла ошибка');
		});
    	e.preventDefault();
	});
});