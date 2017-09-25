
	$('.ValidatePhoneNumber').on('input', function (event) {
		this.value = this.value.replace(/[\+]?[(]?[^0-9][)]?[-\s\.]?[^0-9][-\s\.]?[^0-9]$/im, '');
	});