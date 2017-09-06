
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

		$SumInput.each( (index, data) => {
			const $data = $(data)

			console.log($data.is(':checked'), 'checked')

			if( $data.is(':checked') ) {
				sumTotal += parseFloat( $( data ).data('value-sum-uf') )

				$SumTotalUF.text( numeral(sumTotal).format( '0,0.00' ) )
				$SumTotalPeso.text( numeral( sumTotal * UFVALUE ).format('0,0') )

				setTimeout( () => {
					if($data.attr('disabled') == 'disabled') {
						sumTotal -= parseFloat( $( data ).data('value-sum-uf') )
						console.log($( data ).data('value-sum-uf'), 'sumTotal bounty')
					}
						if ($(".BountyRowWrap .SumInput:checkbox:checked").length > 0)
						{
							console.log('hay checkado uno')
						    // any one is checked
						}
						else {
							sumTotal = 0
							console.log('NO hay checkado uno')

						}

						$SumTotalUF.text( numeral(sumTotal).format( '0,0.00' ) )
						$SumTotalPeso.text( numeral( sumTotal * UFVALUE ).format('0,0') )
				}, 10)
			}
			else {
				if ($(".BountyRowWrap .SumInput:checkbox:checked").length > 0)
				{
					console.log('hay checkado uno')
				    // any one is checked
				}
				else {
					sumTotal = 0
					console.log('NO hay checkado uno')
					$SumTotalUF.text( numeral(sumTotal).format( '0,0.00' ) )
					$SumTotalPeso.text( numeral( sumTotal * UFVALUE ).format('0,0') )

				}

			}

		})


	})