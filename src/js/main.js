// $(document).ready(function() {

	class Cookie {
		constructor(name, value, options) {
			this.name = name;
			this.options = options;
			this.value = value;
		}

		get() {
			const matches = document.cookie.match(new RegExp(
				"(?:^|; )" + this.name.replace(/([.$?*|{}()\[\]\\\/+^])/g, '\\$1') + "=([^;]*)"
			));

			return matches ? decodeURIComponent(matches[1]) : undefined;
		}

		exist() {
			return !!this.get();
		}

		set() {
			let options = this.options,
			expires = options.expires;

			if (expires && typeof expires === "number") {
				const d = new Date();
				d.setTime(d.getTime() + expires * 1000);
				expires = options.expires = d;
			}
			if (expires && expires.toUTCString) {
				options.expires = expires.toUTCString();
			}

			let value = encodeURIComponent(this.value);

			let updatedCookie = this.name + "=" + value;

			for (const propName in options) {
				updatedCookie += "; " + propName;
				const propValue = options[propName];
				if (propValue !== true) {
					updatedCookie += "=" + propValue;
				}
			}

			document.cookie = updatedCookie;
		}

		destroy() {
			this.options = {
				expires: -1
			};
			this.value = "";

			this.set();
		}
	}


	let getCookie = new Cookie();

	getCookie.name = 'name';
	getCookie.value = 'vasya';
	getCookie.options = 1000;


	getCookie.set();

	console.log(getCookie.get());
	console.log(document.cookie);

	let testObj = {
		'1': 'value',
		'2': 'value',
		'asdasd': 'value'
	}
	console.log(testObj);
	let testArr = [];

	for (let prop in testObj) {
		testArr.push(testObj[prop]);
	}


	console.log(testArr);

	let allInputs = [...document.querySelectorAll('input[type="text"]')];


	allInputs.map((input) => {	
		input.addEventListener('change', function(){

			allInputs.map((item) => {
				if (item.value) {
					console.log(item.value);

					

					return false;
				}
			})
		})
	})
// });