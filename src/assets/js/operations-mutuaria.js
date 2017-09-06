
	const $SumInput = $('.SumInput')
	const $SumTotalUF = $('.SumTotalUF')
	const $SumTotalPeso = $('.SumTotalPeso')
	let UFVALUE = '26573.27'

	$.getJSON('http://mindicador.cl/api', function(data) {
		const dailyIndicators = data

		UFVALUE = dailyIndicators.uf.valor

	}).fail(function() {
		console.log('Error al consumir la API UF!');
	});

	$SumInput.on('change', (ev) => {
		const dataValue = $(ev.currentTarget).data('value-sum-uf')

		let sumTotal = 0;

		$(ev.currentTarget).closest('.BountyRowWrap').find('.SumInput').each( (index, data) => {
			const $data = $(data)

			if( $data.is(':checked') ) {
				sumTotal += parseFloat( $( data ).data('value-sum-uf') )

				$(ev.currentTarget).closest('.BountyRowWrap').find('.SumTotalUF').text( numeral(sumTotal).format( '0,0.00' ) )
				$(ev.currentTarget).closest('.BountyRowWrap').find('.SumTotalPeso').text( numeral( sumTotal * UFVALUE ).format('0,0') )

				setTimeout( () => {
					if($data.attr('disabled') == 'disabled') {
						sumTotal -= parseFloat( $( data ).data('value-sum-uf') )
						console.log($( data ).data('value-sum-uf'), 'sumTotal bounty')
					}

					if ($(ev.currentTarget).closest('.BountyRowWrap').find(".SumInput:checkbox:checked").length <= 0) {
						sumTotal = 0
					}

					$(ev.currentTarget).closest('.BountyRowWrap').find('.SumTotalUF').text( numeral(sumTotal).format( '0,0.00' ) )
					$(ev.currentTarget).closest('.BountyRowWrap').find('.SumTotalPeso').text( numeral( sumTotal * UFVALUE ).format('0,0') )

				}, 10)
			}
			else {
				if ($(ev.currentTarget).closest('.BountyRowWrap').find(".SumInput:checkbox:checked").length <= 0) {
					sumTotal = 0
					console.log('NO hay checkado uno')
					$(ev.currentTarget).closest('.BountyRowWrap').find('.SumTotalUF').text( numeral(sumTotal).format( '0,0.00' ) )
					$(ev.currentTarget).closest('.BountyRowWrap').find('.SumTotalPeso').text( numeral( sumTotal * UFVALUE ).format('0,0') )
				}
			}

		})


	})