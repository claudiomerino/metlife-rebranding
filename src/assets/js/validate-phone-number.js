
	$('.ValidatePhoneNumber').on('input', function (event) {
		console.log(event, 'ValidatePhoneNumber')
		this.value = this.value.replace(/\+?([^0-9])?[-. ]?([^0-9])[-. ]?([^0-9])$/, '');
		//this.value = this.value.replace(/[^0-9]/g, '');
	});