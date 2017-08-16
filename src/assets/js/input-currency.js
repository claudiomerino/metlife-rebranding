
	$('input.InputCurrency').change( function() {
		var min = parseInt($(this).attr("min"));
		var max = parseInt($(this).attr("max"));
		var value = parseInt($(this).val());

		if(value < min) {
			value = min;
		}
		if(value > max) {
			value = max;
		}

		const total = value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
		$(this).val(`$ ${total}`);
		$(this).attr('normal-value', value);
	})

	$('input.InputCurrency').focus( function() {
		$(this).val('');
	})