
	const $inputCurrency = $('input.InputCurrency')

	$inputCurrency.each( (index, el) => {

		$(el).change( function() {
			var min = parseInt($(this).attr("min"));
			var max = parseInt($(this).attr("max"));
			var value = parseInt($(this).val());

			if(value < min) {
				value = min;
			}
			if(value > max) {
				value = max;
			}

			inputCurrencyFn(value, $(el))

		})

		$(el).focus( function() {
			inputCurrencyCleanFn($(el))
		})
	})