
	let $inputCurrency = $('input.InputCurrency')
	let $InputCurrencyButton = $('.InputCurrencyButton')

	$inputCurrency.each( (index, el) => {

		$(el).change( function() {
			var min = parseInt($(this).attr("min"));
			var max = parseInt($(this).attr("max"));
			var value = parseInt($(this).val());

			if(value >= min && value <= max) {
				$(this).removeClass('is-invalid-input')
				$InputCurrencyButton.removeClass('button-disabled')
				$InputCurrencyButton.unbind('click')
			} else {
				$(this).addClass('is-invalid-input')
				$InputCurrencyButton.addClass('button-disabled')
				$InputCurrencyButton.on('click', (e) => {
					e.preventDefault()
					$inputCurrency.focus()
				})
			}

			if(isNaN(value)) {
				value = 0
			}

			inputCurrencyFn(value, $(this))

		})

		$(el).focus( function() {
			inputCurrencyCleanFn($(this))
		})

	})

	$InputCurrencyButton.bind('click', (e) => {
		e.preventDefault()
		$inputCurrency.focus()
	})