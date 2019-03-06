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
	// $('[data-cost]').inputmask({"mask": "[9*{1,20}] руб", showMaskOnHover: false,});

	$(document).on('input', '[data-cost]', function() {
		let temp = $(this).val();

		if (temp == 0) {
			temp = 0;
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
	});

	$(document).on('input', 'input[required]', function() {
		let countInputs = $(document).find('.form-block.active').find('input').length;
		let countFilledInputs = 0;

		$(document).find('.form-block.active').find('input[required]').each(function(){
			if ($(this).val()) {
				return countFilledInputs++;
			}
		});

		countInputs == countFilledInputs ? $(this).closest('.form-block').find('.form-btn.form-btn__next').addClass('active') : $(this).closest('.form-block').find('.form-btn.form-btn__next').removeClass('active')
	});

	$(document).on('click', '.form-btn.form-btn__next.active', function() {
		let temp = $('.form-block.active').index('.form-block');
		let allFormBlock = ($('.form-block').length - 1);

		if (temp >= (allFormBlock)) {
			return false;
		} else {
			$('.form-block').eq((temp + 1)).addClass('active');
		}
		$('.form-block').eq(temp).removeClass('active');
	});

	$(document).on('click', '.form-btn.form-btn__prev', function() {
		let temp = $('.form-block.active').index('.form-block');

		if (temp <= 0) {
			return false;
		} else {
			$('.form-block').eq((temp - 1)).addClass('active');
		}
		$('.form-block').eq(temp).removeClass('active');
	});
});