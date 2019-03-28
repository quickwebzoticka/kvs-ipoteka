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


	// 	(function () {
	// 	var $container = $(document.getElementById('simple'));

	// 	$container
	// 		.find('[name="city"]')
	// 		.kladr({
	// 			type: $.kladr.type.city
	// 		});
	// })();

	// // One string example
	// (function () {
	// 	var $container = $(document.getElementById('one_string'));

	// 	var $address = $container.find('[name="address"]'),
	// 		$parent = $container.find('[name="parent"]');

	// 	$address.kladr({
	// 		oneString: true,
	// 		change: function (obj) {
	// 			log(obj);
	// 		}
	// 	});

	// 	$parent.change(function () {
	// 		changeParent($(this).val());
	// 	});

	// 	changeParent($container.find('[name="parent"]:checked').val());

	// 	function changeParent(value) {
	// 		var parentType = null,
	// 			parentId = null;

	// 		switch (value) {
	// 			case 'moscow':
	// 				parentType = $.kladr.type.region;
	// 				parentId = '7700000000000';
	// 				break;

	// 			case 'petersburg':
	// 				parentType = $.kladr.type.region;
	// 				parentId = '7800000000000';
	// 				break;
	// 		}

	// 		$address.kladr({
	// 			parentType: parentType,
	// 			parentId: parentId
	// 		});
	// 	}

	// 	function log(obj) {
	// 		var $log, i;

	// 		$container.find('.js-log li').hide();

	// 		for (i in obj) {
	// 			$log = $container.find('[data-prop="' + i + '"]');

	// 			if ($log.length) {
	// 				$log.find('.value').text(obj[i]);
	// 				$log.show();
	// 			}
	// 		}
	// 	}
	// })();

	// // Type code example
	// (function () {
	// 	var $container = $(document.getElementById('type_code'));

	// 	var $city = $container.find('[name="city"]'),
	// 		$typeCode = $container.find('[name="typecode"]');

	// 	$city.kladr({
	// 		type: $.kladr.type.city
	// 	});

	// 	$typeCode.change(function () {
	// 		changeTypeCode($(this).val());
	// 	});

	// 	changeTypeCode($container.find('[name="typecode"]:checked').val());

	// 	function changeTypeCode(value) {
	// 		var typeCode = null;

	// 		switch (value) {
	// 			case 'city':
	// 				typeCode = $.kladr.typeCode.city;
	// 				break;

	// 			case 'settlement':
	// 				typeCode = $.kladr.typeCode.city + $.kladr.typeCode.settlement;
	// 				break;

	// 			case 'all':
	// 				typeCode = $.kladr.typeCode.city + $.kladr.typeCode.settlement + $.kladr.typeCode.village;
	// 				break;
	// 		}

	// 		$city.kladr('typeCode', typeCode);
	// 	}
	// })();

	// // Form example
	// (function () {
	// 	var $container = $(document.getElementById('form'));

	// 	var $zip = $container.find('[name="zip"]'),
	// 		$region = $container.find('[name="region"]'),
	// 		$district = $container.find('[name="district"]'),
	// 		$city = $container.find('[name="city"]'),
	// 		$street = $container.find('[name="street"]'),
	// 		$building = $container.find('[name="building"]');

	// 	var $tooltip = $container.find('.tooltip');

	// 	$()
	// 		.add($region)
	// 		.add($district)
	// 		.add($city)
	// 		.add($street)
	// 		.add($building)
	// 		.kladr({
	// 			parentInput: $container.find('.js-form-address'),
	// 			verify: true,
	// 			select: function (obj) {
	// 				setLabel($(this), obj.type);
	// 				$tooltip.hide();
	// 			},
	// 			check: function (obj) {
	// 				var $input = $(this);

	// 				if (obj) {
	// 					setLabel($input, obj.type);
	// 					$tooltip.hide();
	// 				}
	// 				else {
	// 					showError($input, 'Введено неверно');
	// 				}
	// 			},
	// 			checkBefore: function () {
	// 				var $input = $(this);

	// 				if (!$.trim($input.val())) {
	// 					$tooltip.hide();
	// 					return false;
	// 				}
	// 			}
	// 		});

	// 	$region.kladr('type', $.kladr.type.region);
	// 	$district.kladr('type', $.kladr.type.district);
	// 	$city.kladr('type', $.kladr.type.city);
	// 	$street.kladr('type', $.kladr.type.street);
	// 	$building.kladr('type', $.kladr.type.building);

	// 	// Отключаем проверку введённых данных для строений
	// 	$building.kladr('verify', false);

	// 	// Подключаем плагин для почтового индекса
	// 	$zip.kladrZip($container);

	// 	function setLabel($input, text) {
	// 		text = text.charAt(0).toUpperCase() + text.substr(1).toLowerCase();
	// 		$input.parent().find('label').text(text);
	// 	}

	// 	function showError($input, message) {
	// 		$tooltip.find('span').text(message);

	// 		var inputOffset = $input.offset(),
	// 			inputWidth = $input.outerWidth(),
	// 			inputHeight = $input.outerHeight();

	// 		var tooltipHeight = $tooltip.outerHeight();

	// 		$tooltip.css({
	// 			left: (inputOffset.left + inputWidth + 10) + 'px',
	// 			top: (inputOffset.top + (inputHeight - tooltipHeight) / 2 - 1) + 'px'
	// 		});

	// 		$tooltip.show();
	// 	}
	// })();

	// // Form with map example
	// (function () {
	// 	var $container = $(document.getElementById('form_with_map'));

	// 	var $region = $container.find('[name="region"]'),
	// 		$district = $container.find('[name="district"]'),
	// 		$city = $container.find('[name="city"]'),
	// 		$street = $container.find('[name="street"]'),
	// 		$building = $container.find('[name="building"]');

	// 	var map = null,
	// 		map_created = false;

	// 	$()
	// 		.add($region)
	// 		.add($district)
	// 		.add($city)
	// 		.add($street)
	// 		.add($building)
	// 		.kladr({
	// 			parentInput: $container.find('.js-form-address'),
	// 			verify: true,
	// 			labelFormat: function (obj, query) {
	// 				var label = '';

	// 				var name = obj.name.toLowerCase();
	// 				query = query.name.toLowerCase();

	// 				var start = name.indexOf(query);
	// 				start = start > 0 ? start : 0;

	// 				if (obj.typeShort) {
	// 					label += obj.typeShort + '. ';
	// 				}

	// 				if (query.length < obj.name.length) {
	// 					label += obj.name.substr(0, start);
	// 					label += '<strong>' + obj.name.substr(start, query.length) + '</strong>';
	// 					label += obj.name.substr(start + query.length, obj.name.length - query.length - start);
	// 				} else {
	// 					label += '<strong>' + obj.name + '</strong>';
	// 				}

	// 				if (obj.parents) {
	// 					for (var k = obj.parents.length - 1; k > -1; k--) {
	// 						var parent = obj.parents[k];
	// 						if (parent.name) {
	// 							if (label) label += '<small>, </small>';
	// 							label += '<small>' + parent.name + ' ' + parent.typeShort + '.</small>';
	// 						}
	// 					}
	// 				}

	// 				return label;
	// 			},
	// 			change: function (obj) {
	// 				if (obj) {
	// 					setLabel($(this), obj.type);
	// 				}

	// 				log(obj);
	// 				addressUpdate();
	// 				mapUpdate();
	// 			},
	// 			checkBefore: function () {
	// 				var $input = $(this);

	// 				if (!$.trim($input.val())) {
	// 					log(null);
	// 					addressUpdate();
	// 					mapUpdate();
	// 					return false;
	// 				}
	// 			}
	// 		});

	// 	$street.kladr({
	// 			labelFormat: function (obj, query) {
	// 				var label = '';

	// 				var name = obj.name.toLowerCase();
	// 				query = query.name.toLowerCase();

	// 				var start = name.indexOf(query);
	// 				start = start > 0 ? start : 0;

	// 				if (obj.typeShort) {
	// 					label += obj.typeShort + '. ';
	// 				}

	// 				if (query.length < obj.name.length) {
	// 					label += obj.name.substr(0, start);
	// 					label += '<strong>' + obj.name.substr(start, query.length) + '</strong>';
	// 					label += obj.name.substr(start + query.length, obj.name.length - query.length - start);
	// 				} else {
	// 					label += '<strong>' + obj.name + '</strong>';
	// 				}

	// 				if (obj.parents) {
	// 					for (var k = obj.parents.length - 1; k > -1; k--) {
	// 						var parent = obj.parents[k];
	// 						if (parent.name && parent.contentType == 'city') {
	// 							if (label) label += '<small>, </small>';
	// 							label += '<small>' + parent.typeShort + '. ' + parent.name + '</small>';
	// 						}
	// 					}
	// 				}

	// 				return label;
	// 			}			
	// 	});
			
	// 	$region.kladr('type', $.kladr.type.region);
	// 	$district.kladr('type', $.kladr.type.district);
	// 	$city.kladr('type', $.kladr.type.city);
	// 	$street.kladr('type', $.kladr.type.street);
	// 	$building.kladr('type', $.kladr.type.building);

	// 	// Включаем получение родительских объектов для населённых пунктов
	// 	$city.kladr('withParents', true);
	// 	$street.kladr('withParents', true);

	// 	// Отключаем проверку введённых данных для строений
	// 	$building.kladr('verify', false);

	// 	ymaps.ready(function () {
	// 		if (map_created) return;
	// 		map_created = true;

	// 		map = new ymaps.Map('map', {
	// 			center: [55.76, 37.64],
	// 			zoom: 12,
	// 			controls: []
	// 		});

	// 		map.controls.add('zoomControl', {
	// 			position: {
	// 				right: 10,
	// 				top: 10
	// 			}
	// 		});
	// 	});

	// 	function setLabel($input, text) {
	// 		text = text.charAt(0).toUpperCase() + text.substr(1).toLowerCase();
	// 		$input.parent().find('label').text(text);
	// 	}

	// 	function mapUpdate() {
	// 		var zoom = 4;

	// 		var address = $.kladr.getAddress('.js-form-address', function (objs) {
	// 			var result = '';

	// 			$.each(objs, function (i, obj) {
	// 				var name = '',
	// 					type = '';

	// 				if ($.type(obj) === 'object') {
	// 					name = obj.name;
	// 					type = ' ' + obj.type;

	// 					switch (obj.contentType) {
	// 						case $.kladr.type.region:
	// 							zoom = 4;
	// 							break;

	// 						case $.kladr.type.district:
	// 							zoom = 7;
	// 							break;

	// 						case $.kladr.type.city:
	// 							zoom = 10;
	// 							break;

	// 						case $.kladr.type.street:
	// 							zoom = 13;
	// 							break;

	// 						case $.kladr.type.building:
	// 							zoom = 16;
	// 							break;
	// 					}
	// 				}
	// 				else {
	// 					name = obj;
	// 				}

	// 				if (result) result += ', ';
	// 				result += type + name;
	// 			});

	// 			return result;
	// 		});

	// 		if (address && map_created) {
	// 			var geocode = ymaps.geocode(address);
	// 			geocode.then(function (res) {
	// 				map.geoObjects.each(function (geoObject) {
	// 					map.geoObjects.remove(geoObject);
	// 				});

	// 				var position = res.geoObjects.get(0).geometry.getCoordinates(),
	// 					placemark = new ymaps.Placemark(position, {}, {});

	// 				map.geoObjects.add(placemark);
	// 				map.setCenter(position, zoom);
	// 			});
	// 		}
	// 	}

	// 	function addressUpdate() {
	// 		var address = $.kladr.getAddress($container.find('.js-form-address'));

	// 		$container.find('#address').text(address);
	// 	}

	// 	function log(obj) {
	// 		var $log, i;

	// 		$container.find('.js-log li').hide();

	// 		for (i in obj) {
	// 			$log = $container.find('[data-prop="' + i + '"]');

	// 			if ($log.length) {
	// 				$log.find('.value').text(obj[i]);
	// 				$log.show();
	// 			}
	// 		}
	// 	}
	// })();


	//------------------------------------------------------------------------------LINE----------------------------------


	$('[data-autocomplete-region]').kladr({
		token: 'token',
    key: 'key',
    type: $.kladr.type.region
	});

	$('[data-autocomplete-city]').kladr({
		token: 'token',
    key: 'key',
    type: $.kladr.type.city
	});

	$('[data-autocomplete-street]').kladr({
		token: 'token',
    key: 'key',
    type: $.kladr.type.building
	});

	$('[data-autocomplete-zip]').kladr({
		token: 'token',
    key: 'key',
    type: $.kladr.type.district
	});


function init() {
	//data-inputmask-regex="[А-Яа-я]{1,}"
	// $('[data-name]').inputmask({"mask": "Aa{1,}[-Aa{1,}]", showMaskOnHover: false, greedy: false});
	$('[data-name]').inputmask({regex: "[А-Яа-я]{1,}[-][А-Яа-я]{1,}", showMaskOnHover: false, placeholder: ' ', greedy: false});
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

	let formAddJob = $('.form-add-job').clone();

	$('.form-add-job').remove();


	$(document).on('change', '[name="СемейноеПоложение"]', function() {

		if ( $(this).attr('id') === 'marriage') {
			$('[data-marriage-content]').slideDown(300);
		} else {
			$('[data-marriage-content]').slideUp(300);
		}
	});

	$(document).on('click', '.btn-add-job', function() {
		let count = $(this).closest('.form-tabs-container_job').find('.form-add-job').length;
		if (count < 3) {
			$(this).closest('.form-tabs-container_job').find('.form-add-job-wrapper').append(formAddJob.clone());
			if (count == 2) {
				$(this).addClass('disabled');		
			}
		}

	});

	$(document).on('change', '[data-type-job]', function() {
		if (this.value == 'Собственник бизнеса') {
			$(this).closest('.form-row').find('[data-type-job-field]').slideDown(300);
			$(this).closest('.form-row').find('[data-type-job-field]').find('input').attr('required', true);
		} else {
			$(this).closest('.form-row').find('[data-type-job-field]').slideUp(300);
			$(this).closest('.form-row').find('[data-type-job-field]').find('input').attr('required', false);
		}
	});


	$(document).on('change', '[data-period]', function() {
		let count = parseInt($(this).val());

		if (count > 30) {
			count = 30
		}

		$(this).val(count);
	});

	let anketa = $('[data-step-name="ЛичныеДанные"]').find('.form-tabs-container').clone();
	let link = $('[data-step-name="ЛичныеДанные"]').find('.form-tabs-nav__link-add').clone();

	let linkSozJob = $('.form-tabs-nav__link-job').clone();
	let anketJob = $('.form-tabs-container_job').clone();

	let linkSozActives = $('.form-tabs-nav__link-actives').clone();
	let anketActives = $('.form-tabs-container_actives').clone();

	
	anketa.removeClass('active');
	link.removeClass('active');
	

	anketJob.removeClass('active');
	linkSozJob.removeClass('active');


	linkSozActives.removeClass('active');
	anketActives.removeClass('active');


	$('.form-tabs-nav__link-add').remove();
	$('.name-wrapper').remove();
	$('.account-soz').remove();
	$('.form-tabs-nav__link-job').remove();
	$('.form-tabs-nav__link-actives').remove();

	$(document).on('click', '.form-tabs-nav__btn', function() {
		let count = $(this).closest('.form-block').find('.form-tabs-nav__link').length;

		if ($(this).closest('.form-block').find('.form-tabs-nav__link-add').length < 3) {
			$(this).closest('.form-block').find('.form-tabs-nav__link-wrapper').append(link.clone());
			$(this).closest('.form-block').find('.form-tabs-container-wrapper').append(anketa.clone().addClass("soz"));
			$(document).find('.soz').find('.form-row.children-wrapper').remove();
			$(document).find('.soz').find('[data-marriage-content]').remove();


			$('.form-tabs-nav__link-wrapper-job').append(linkSozJob.clone());
			$('.form-tabs-container-wrapper_job').append(anketJob.clone().addClass("soz"));


			$('.form-tabs-nav__link-wrapper-actives').append(linkSozActives.clone());
			$('.form-tabs-container-wrapper_actives').append(anketActives.clone().addClass("soz"));

			const addID = (container) => {
				$(container).eq(count).find('input').each(function(index) {

					if (!$(this).attr('id') == 0) {

						let temp = $(this).attr('id');

						$(this).attr('id', `${temp}-${count}`);
						$(this).siblings('label').attr('for', `${temp}-${count}`);
					}
				});

				$(container).eq(count).find('input[type="radio"]').each(function(index) {
					if (!$(this).attr('name') == 0) {

						let temp = $(this).attr('name');

						$(this).attr('name', `${temp}-${count}`);
					}
				});
			};

			addID('.form-tabs-container');
			addID('.form-tabs-container_job');
			addID('.form-tabs-container_actives');

			init();
			$('input[required]').trigger('input');
		}
		
	});

	$(document).on('change', '[data-soz-add]', function () {
		let index = $(this).closest('.form-tabs-container').index('.form-tabs-container');
		if($(this).prop('checked')) {
			
			$('.form-tabs-container_job').eq(index).hide();
			$('.form-tabs-nav__link-wrapper-job .form-tabs-nav__link').eq(index).hide();
			$('.form-tabs-container_job').eq(index).find('input[data-required]').each(function() {
				$(this).attr('required', false);
			});
		} else {
			$('.form-tabs-container_job').eq(index).show();
			$('.form-tabs-nav__link-wrapper-job .form-tabs-nav__link').eq(index).show();
			$('.form-tabs-container_job').eq(index).find('input[data-required]').each(function() {
				$(this).attr('required', true);
			});
		}
	});


	$(document).on('change', '[name="БрачныйКонтракт"]', function() {
		let tempOffset = $('[data-step-name="ЛичныеДанные"]').offset().top;
		if ($(this).attr('value') === '1') {
			$('.form-tabs-nav__btn').trigger('click');
			$('.form-tabs-nav__link-add').eq($('.form-tabs-nav__link-add').length - 1).addClass('marriage-link');
			$('.form-tabs-container.soz').eq($('.form-tabs-container.soz').length - 1).addClass('marriage-content');

			$('.form-tabs-container_job.soz').eq($('.form-tabs-container_job.soz').length - 1).addClass('marriage-content');
			$('.form-tabs-nav__link-job').eq($('.form-tabs-nav__link-job').length - 1).addClass('marriage-link');

			$('.form-tabs-container_actives').eq($('.form-tabs-container_actives').length - 1).addClass('marriage-content');
			$('.form-tabs-nav__link-actives').eq($('.form-tabs-nav__link-actives').length - 1).addClass('marriage-link');


			$('html, body').animate({scrollTop: tempOffset}, 1000);

			$(this).prop('checked', true);
		} else {
			$('.marriage-link').remove();
			$('.marriage-content').remove();
			$(this).prop('checked', true);
		}
	});


	$(document).on('click', '.form-tabs-nav__link:not(.active)', function(e) {

		let thisIndex = $(this).index('.form-tabs-nav__link');

		if(e.target.closest('.form-tabs-nav__link-add-cross')
	  || e.target.closest('.form-tabs-nav__link-wrapper-job')
	  || e.target.closest('.form-tabs-nav__link-wrapper-actives')) {
			return false;
		}

		$(this).siblings('.form-tabs-nav__link').removeClass('active');
		$(this).addClass('active');
		$(this).closest('.form-block').find('.form-tabs-container').removeClass('active').eq(thisIndex).addClass('active');
	});

	$(document).on('click', '.form-tabs-nav__link-wrapper-job .form-tabs-nav__link', function() {
		let thisIndex = $(this).index('.form-tabs-nav__link-wrapper-job .form-tabs-nav__link');

		$(this).siblings('.form-tabs-nav__link').removeClass('active');
		$(this).addClass('active');
		$(this).closest('.form-block').find('.form-tabs-container').removeClass('active').eq(thisIndex).addClass('active');
	});

	$(document).on('click', '.form-tabs-nav__link-wrapper-actives .form-tabs-nav__link', function() {
		let thisIndex = $(this).index('.form-tabs-nav__link-wrapper-actives .form-tabs-nav__link');

		$(this).siblings('.form-tabs-nav__link').removeClass('active');
		$(this).addClass('active');
		$(this).closest('.form-block').find('.form-tabs-container').removeClass('active').eq(thisIndex).addClass('active');
	});


	$(document).on('click', '.form-tabs-nav__link-add-cross', function() {
		let index = $(this).closest('.form-tabs-nav__link')
					 						 .index('.form-tabs-nav__link');

		const removeAnket = (container) => {
			$(container).find('.form-tabs-container').removeClass('active');
			$(container).find('.form-tabs-container').eq(0).addClass('active');

			$(container).find('.form-tabs-nav__link').removeClass('active');
			$(container).find('.form-tabs-nav__link').eq(0).addClass('active');

			$(container).find('.form-tabs-nav__link').eq(index).remove();
			$(container).find('.form-tabs-container').eq(index).remove();
		}

		removeAnket('[data-step-name="СведенияРаботе"]');
		removeAnket('[data-step-name="ЛичныеДанные"]');
		removeAnket('[data-step-name="Активы"]');

		$('input[required]').trigger('input');
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

			if (val[0] == 0) {
				val[0] = '01';
			}

			if (val[1] > 12) {
				val[1] = 12;
			}

			if (val[1] == 0) {
				val[1] = '01';
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
			let tempSubsidy;
			let tempProcent;

			if (parseInt($('[data-military-summ]').val())) {
				tempSubsidy = $('[data-military-summ]').val();
			}
			if (parseInt($('[data-subsidy-summ]').val())) {
				tempSubsidy = $('[data-subsidy-summ]').val();
			}

			tempCredit = tempCredit || 0;
			tempSubsidy = tempSubsidy || '0';

			tempCredit = tempCredit.replace(/\s+/g,'');
			tempCredit = parseInt(tempCredit);

			tempTotal = tempTotal.replace(/\s+/g,'');
			tempTotal = parseInt(tempTotal);

			tempSubsidy = tempSubsidy.replace(/\s+/g,'');
			tempSubsidy = parseInt(tempSubsidy);

			if (tempCredit > tempTotal) {
					$(this).val('Сумма кредита не может быть больше стоимости недвижимости');
					return false;
			}

			tempFirst = tempTotal - tempCredit - tempSubsidy;

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
			let tempTotalCredit = $('[data-credit-summ]').val();
			let tempFirstPart = $('[data-credit-first]').val();
			let tempProcent;
			let tempDiff;

			tempTotalCredit = tempTotalCredit || '0';
			tempFirstPart = tempFirstPart || '0';
			tempFirst = tempFirst || '0';

			tempFirst = tempFirst.replace(/\s+/g,'');
			tempFirst = parseInt(tempFirst);

			tempTotal = tempTotal.replace(/\s+/g,'');
			tempTotal = parseInt(tempTotal);

			tempTotalCredit = tempTotalCredit.replace(/\s+/g,'');
			tempTotalCredit = parseInt(tempTotalCredit);

			tempFirstPart = tempFirstPart.replace(/\s+/g,'');
			tempFirstPart = parseInt(tempFirstPart);


			tempTotalCredit = tempTotal - tempFirstPart;

			if (tempTotalCredit <= 0) {
				tempTotalCredit = tempTotal;
			}

			if (tempFirst > tempTotal) {
					$(this).val('НИС не может быть больше стоимости недвижимости');
					return false;
			}

			tempProcent = (tempFirst * 100) / tempTotal;
			tempProcent = Math.round(tempProcent);

			tempDiff = tempTotalCredit - tempFirst;

			$('[data-credit-summ]').val(tempDiff.toLocaleString());
			$('[data-credit-summ]').trigger('change');

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

			tempProcent = tempProcent || '0';

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
			$('[data-military-summ]').val(`${tempFirst.toLocaleString()}`);
			$('[data-military-summ]').trigger('change');
		}
	});

	$(document).on('change', '[data-subsidy-summ]', function () {
		if (parseInt($('[data-credit-main]').val()) > 0) {
			let tempFirst = $(this).val();
			let tempTotal = $('[data-credit-main]').val();
			let tempProcent;
			let tempTotalCredit = $('[data-credit-summ]').val();
			let tempFirstPart = $('[data-credit-first]').val();
			let tempDiff;

			tempTotalCredit = tempTotalCredit || '0';
			tempFirstPart = tempFirstPart || '0';
			tempFirst = tempFirst || '0';

			tempFirst = tempFirst.replace(/\s+/g,'');
			tempFirst = parseInt(tempFirst);

			tempTotal = tempTotal.replace(/\s+/g,'');
			tempTotal = parseInt(tempTotal);

			tempTotalCredit = tempTotalCredit.replace(/\s+/g,'');
			tempTotalCredit = parseInt(tempTotalCredit);

			tempFirstPart = tempFirstPart.replace(/\s+/g,'');
			tempFirstPart = parseInt(tempFirstPart);


			tempTotalCredit = tempTotal - tempFirstPart;

			if (tempTotalCredit <= 0) {
				tempTotalCredit = tempTotal;
			}

			if (tempFirst > tempTotal) {
					$(this).val('Размер субсидии не может быть больше стоимости недвижимости');
					return false;
			}

			tempProcent = (tempFirst * 100) / tempTotal;
			tempProcent = Math.round(tempProcent);

			tempDiff = tempTotalCredit - tempFirst;

			$('[data-credit-summ]').val(tempDiff.toLocaleString());
			$('[data-credit-summ]').trigger('change');

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

			tempProcent = tempProcent || '0';

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
			$('[data-subsidy-summ]').val(`${tempFirst.toLocaleString()}`);
			$('[data-subsidy-summ]').trigger('change');
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
					$(this).val('Размер материнского капитала не может быть больше стоимости недвижимости');
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
			let tempSubsidy = undefined;
			let tempProcent;

			if (parseInt($('[data-military-summ]').val())) {
				tempSubsidy = $('[data-military-summ]').val();
			}
			if (parseInt($('[data-subsidy-summ]').val())) {
				tempSubsidy = $('[data-subsidy-summ]').val();
			}

			tempSubsidy = tempSubsidy || '0';
			tempCredit = tempCredit || 0;

			tempFirst = tempFirst.replace(/\s+/g,'');
			tempFirst = parseInt(tempFirst);

			tempSubsidy = tempSubsidy.replace(/\s+/g,'');
			tempSubsidy = parseInt(tempSubsidy);

			tempTotal = tempTotal.replace(/\s+/g,'');
			tempTotal = parseInt(tempTotal);

			if (tempFirst > tempTotal) {
					$(this).val('Первоначальный взнос не может быть больше стоимости недвижимости');
					return false;
			}

			tempCredit = tempTotal - tempFirst - tempSubsidy;


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
			let tempSubsidy;
			let tempFirst;

			if (parseInt($('[data-military-summ]').val())) {
				tempSubsidy = $('[data-military-summ]').val();
			}
			if (parseInt($('[data-subsidy-summ]').val())) {
				tempSubsidy = $('[data-subsidy-summ]').val();
			}
			tempSubsidy = tempSubsidy || '0';
			tempCredit = tempCredit || 0;

			tempProcent = tempProcent.replace(/\s+/g,'');
			tempProcent = parseInt(tempProcent);

			tempSubsidy = tempSubsidy.replace(/\s+/g,'');
			tempSubsidy = parseInt(tempSubsidy);

			if (tempProcent > 100) {
				$(this).val('Не может быть больше 100%');
				return false;
			}

			tempTotal = tempTotal.replace(/\s+/g,'');
			tempTotal = parseInt(tempTotal);

			tempFirst = (tempTotal / 100) * tempProcent;

			tempCredit = tempTotal - tempFirst - tempSubsidy;

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
		if (compare || (countInputs == 0 && countFilledInputs == 0)) {
			$('.form-block.active').find('.form-btn.form-btn__next').addClass('active');
		} else {
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

	$(document).on('change', '[data-mono]', function() {
		if (!$(this).prop('checked')) {
			$(this).closest('.form-group_hidden').find('.form-group__text').find('input').each(function(){
				$(this).val('');
				$(this).trigger('change');
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
				let tempNameReq = $(this).attr('name');
				$(this).attr('id', `${tempName}-${tempIndex}`);
				$(this).attr('name', `${tempNameReq}-${tempIndex}`);
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