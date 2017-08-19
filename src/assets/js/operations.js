
	let $Bounty = $( '.Bounty' );
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

		if( $(ev.currentTarget).is(':checked') ) {
			$(ev.currentTarget).closest('.BountyRow').next().find('input.Bounty').attr('disabled', false)
			let sumTotal = 0;

			$Bounty.each( (index, data) => {
				const $BountyValue = $(data)
				if( $BountyValue.is(':checked') ) {
					sumTotal += parseFloat( $( data ).data('value-uf') )
				}
			})

			$BountyValueUF.text( numeral(sumTotal).format( '0,0.00' ) )
			$BountyValueConvertUF.text( numeral( sumTotal * UFVALUE ).format('0,0') )
		}

		else {
			$(ev.currentTarget).closest('.BountyRow').nextAll().find('input.Bounty').attr('disabled', true)

			let sumTotal = numeral($BountyValueUF.text()).format( '0,0.00' )

			sumTotal -= numeral( $(ev.currentTarget).data('value-uf') ).format( '0,0.00' )

			$BountyValueUF.text( numeral(sumTotal).format( '0,0.00' ) )
			$BountyValueConvertUF.text( numeral( sumTotal * UFVALUE ).format('0,0') )

			let $arrayNextAll = $(ev.currentTarget).closest('.BountyRow').nextAll().find('input.Bounty').toArray()

			$( $arrayNextAll ).each( (index, data) => {
				if( $(data).is(':checked') ) {
					const $nextAllValueUf = numeral( $(data).data('value-uf') ).format( '0,0.00' )

					sumTotal = numeral(sumTotal).format( '0,0.00' ) - $nextAllValueUf

					$BountyValueUF.text( numeral(sumTotal).format( '0,0.00' ) )
					$BountyValueConvertUF.text( numeral( sumTotal * UFVALUE ).format('0,0') )
				}
			})

			$(ev.currentTarget).closest('.BountyRow').nextAll().find('input.Bounty').attr('checked', false)

		}

	})

 	$Bounty.each( (index, data) => {

 		if(index === 0 ) {
 			$(data).attr('disabled', false)
 		}

 		$(data).addClass('BountyValue-' + index)

 	})