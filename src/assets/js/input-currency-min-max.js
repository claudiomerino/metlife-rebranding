
	let $inputCurrency = $('input.InputCurrency')
	let $InputCurrencyButton = $('.InputCurrencyButton')

	$inputCurrency.on( 'keydown', (e) => {

		if (e.which != 8 && e.which != 0 && (e.which < 48 || e.which > 57)) {
			return false;
    }

    setTimeout( () => {
			let $ArrayInputCurrency = $(e.currentTarget).closest('.InputCurrencyForm').find('.InputCurrency')

			$ArrayInputCurrency.each( (index, el) => {
				const value = $(el).val()
				const min = parseInt( $(el).attr('min') )
				const max = parseInt( $(el).attr('max') )
				$(el).attr('normal-value', numeral(value).format('0'))

				const normalValue = parseInt($(el).attr('normal-value'))

				if(normalValue >= min && normalValue <= max) {

					$(el).removeClass('is-invalid-input')
					$InputCurrencyButton.removeClass('button-disabled')
					$InputCurrencyButton.unbind('click')

				} else if(normalValue == 0) {

					$(el).removeClass('is-invalid-input')
					$InputCurrencyButton.removeClass('button-disabled')

				} else {

					$(el).addClass('is-invalid-input')
					$InputCurrencyButton.addClass('button-disabled')

				}
				invalidInputSumFn($(el))
				inputCurrencyFn(value, $(el))
			})

    }, 1000)

	})

	$InputCurrencyButton.bind('click', (e) => {
		e.preventDefault()
	})