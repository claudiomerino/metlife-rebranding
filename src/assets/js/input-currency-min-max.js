
	let $inputCurrency = $('input.InputCurrency')
	let $InputCurrencyButton = $('.InputCurrencyButton')
	let $InputCurrencyButtonDefault = $('.BountyRowDefault .SumInput')
	let $InputCurrencyFormButtonBounty = $('.InputCurrencyForm .BountyRowWrap .Bounty')

	$InputCurrencyButtonDefault.add($InputCurrencyFormButtonBounty).on('click', (e) => {
    InputCurrencyChangeFn(e)
	})

	$inputCurrency.on( 'keydown', (e) => {

		if (e.which != 8 && e.which != 0 && (e.which < 48 || e.which > 57)) {
			return false;
    }

    InputCurrencyChangeFn(e)

	})

	function InputCurrencyChangeFn(e) {

    setTimeout( () => {
			let $ArrayInputCurrency = $(e.currentTarget).closest('.InputCurrencyForm').find('.InputCurrency')
			let valueSumUF = 0

			$ArrayInputCurrency.each( (index, el) => {
				const value = $(el).val()
				const min = parseInt( $(el).attr('min') )
				const max = parseInt( $(el).attr('max') )
				if(value) {
					if($(e.currentTarget).closest('.BountyRow').find('.Bounty').is(':checked') || $(e.currentTarget).is(':checked') == false || $(e.currentTarget).is(':checked')) {

						$(e.currentTarget).attr('disabled', false)

						if($(el).hasClass('InputCurrencyBountyRowDefault')) {
							if($(el).closest('.BountyRowDefault').find('.BountyRowDefaultSumInput').is(':checked')) {
							}
							else {
								valueSumUF -= parseInt($(el).val().replace(/\,/g,''))
							}
						}

						valueSumUF += parseInt($(el).val().replace(/\,/g,''))

						$(e.currentTarget).closest('.BountyRow').find('.Bounty').data('value-sum-uf', valueSumUF)

						const numberSumTotal = numeral(valueSumUF);
						const numberUFVALUE = UFVALUE
						const numberTotalBounty = numberSumTotal.divide(numberUFVALUE);

						$(e.currentTarget).closest('.BountyRowWrap').find('.SumTotalUF').text( numeral(numberTotalBounty._value).format( '0,0.00' ) )
						$(e.currentTarget).closest('.BountyRowWrap').find('.SumTotalPeso').text( numeral( valueSumUF ).format('0,0') )


					}

					else {
						if($(e.currentTarget).hasClass('BountyRowDefaultSumInput')) {
							if($(e.currentTarget).closest('.InputCurrencyForm').find('.BountyRowDefault').find('.SumInput').is(':checked')) {
							}
							else {
								$(e.currentTarget).attr('disabled', false)
							}
						}
						else {
							$(e.currentTarget).attr('disabled', true)
						}
					}
				}


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

	}

	$InputCurrencyButton.bind('click', (e) => {
		e.preventDefault()
	})