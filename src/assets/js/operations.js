	let $Bounty = $( '.Bounty' );
	let $BountyRowWrap = $( '.BountyRowWrap' );
	let $Total = $( '.Total' );
	let $BountyValueUF = $('.BountyValueUF')
	let $BountyValueConvertUF = $('.BountyValueConvertUF')
	let UFVALUE = '26573.27'
	let $UFValue = $('.UFValue')
	let $UFConvertion = $('.UFConvertion')

	$.getJSON('http://mindicador.cl/api', function(data) {
		const dailyIndicators = data

		UFVALUE = dailyIndicators.uf.valor

		$UFValue.each( (index, data) => {
			const UFTOTAL = parseFloat( $(data).text() ) * UFVALUE

			$( $UFConvertion[index] ).text( numeral(UFTOTAL).format('0,0') )
		})


	}).fail(function() {
		console.log('Error al consumir la API UF!');
	});


	$($Bounty).on('change', (ev) => {
		BountyChangeFn(ev)
	})

	function BountyChangeFn(ev) {

		if( $(ev.currentTarget).is(':checked') ) {
			$(ev.currentTarget).closest('.BountyRow').addClass('BountyRowActive')
			$(ev.currentTarget).closest('.BountyRowWrap').find('.BountyRowActive').next().find('input.Bounty').attr('disabled', false)

			// Enable Input Currency if not checked .Bounty
			$(ev.currentTarget).closest('.BountyRow').find('.InputCurrency').attr('disabled', false)
			let sumTotal = 0;

			$(ev.currentTarget).closest('.BountyRowWrap').find('.Bounty').each( (index, data) => {
				const $BountyValue = $(data)
				if( $BountyValue.is(':checked') ) {
					sumTotal += parseFloat( $( data ).data('value-uf') )
				}
			})

			$(ev.currentTarget).closest('.BountyRowWrap').find('.BountyActive').attr('disabled', false)

			$(ev.currentTarget).closest('.BountyRowWrap').find('.BountyValueUF').text( numeral(sumTotal).format( '0,0.00' ) )
			$(ev.currentTarget).closest('.BountyRowWrap').find('.BountyValueConvertUF').text( numeral( sumTotal * UFVALUE ).format('0,0') )
		}

		else {
			if($(ev.currentTarget).closest('.BountyRow').hasClass('BountyRowUntilActive')) {
				$(ev.currentTarget).closest('.BountyRow').nextAll().find('input.Bounty').attr('disabled', true)
			}
			else {
				$(ev.currentTarget).closest('.BountyRow').nextUntil('.BountyRowUntilActive').find('input.Bounty').attr('disabled', true)
			}

			$(ev.currentTarget).closest('.BountyRow').removeClass('BountyRowActive')
			$(ev.currentTarget).closest('.BountyRow').nextAll().removeClass('BountyRowActive')

			if($(ev.currentTarget).hasClass('BountyDefaultValue')) {
				changeSumInputFn($(ev.currentTarget).closest('.InputCurrencyForm').find('.BountyRow').find('.Bounty'));
			}

			// Disable Input Currency if not checked .Bounty
			$(ev.currentTarget).closest('.BountyRow').find('.InputCurrency').attr('disabled', true)
			$(ev.currentTarget).closest('.BountyRow').nextAll().find('.InputCurrency').attr('disabled', true)

			let sumTotal = numeral($(ev.currentTarget).closest('.BountyRowWrap').find('.BountyValueUF').text()).format( '0,0.00' )

			sumTotal -= numeral( $(ev.currentTarget).data('value-uf') ).format( '0,0.00' )

			$(ev.currentTarget).closest('.BountyRowWrap').find('.BountyValueUF').text( numeral(sumTotal).format( '0,0.00' ) )
			$(ev.currentTarget).closest('.BountyRowWrap').find('.BountyValueConvertUF').text( numeral( sumTotal * UFVALUE ).format('0,0') )

			let $arrayNextAll = $(ev.currentTarget).closest('.BountyRow').nextAll().find('input.Bounty').toArray()

			$( $arrayNextAll ).each( (index, data) => {
				if( $(data).is(':checked') ) {
					const $nextAllValueUf = numeral( $(data).data('value-uf') ).format( '0,0.00' )

					sumTotal = numeral(sumTotal).format( '0,0.00' ) - $nextAllValueUf

					$(ev.currentTarget).closest('.BountyRowWrap').find('.BountyValueUF').text( numeral(sumTotal).format( '0,0.00' ) )
					$(ev.currentTarget).closest('.BountyRowWrap').find('.BountyValueConvertUF').text( numeral( sumTotal * UFVALUE ).format('0,0') )
				}
			})

			$(ev.currentTarget).closest('.BountyRow').nextUntil('.BountyRowUntilActive').find('input.Bounty').attr('checked', false)

			$(ev.currentTarget).closest('.BountyRowWrap').find('.BountyActive').attr('disabled', false)

		}

	}

 	$BountyRowWrap.each( (index, data) => {

 		$( $(data).find('.BountyRow')[0] ).find('input.Bounty').attr('disabled', false)

 	})

 	$Bounty.each( (index, data) => {

 		$(data).addClass('BountyValue-' + index)

 	})