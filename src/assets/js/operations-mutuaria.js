
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
		changeSumInputFn(ev);
	})

	function changeSumInputFn (ev) {

		let sumTotal = 0;

		if($(ev.currentTarget).length == 1) {

			$(ev.currentTarget).closest('.BountyRowWrap').find('.SumInput').each( (index, data) => {
				const $data = $(data)

				if( $data.is(':checked') ) {
					sumTotal += parseFloat( $( data ).data('value-sum-uf') )

					$(ev.currentTarget).closest('.BountyRowWrap').find('.SumTotalUF').text( numeral(sumTotal).format( '0,0.00' ) )
					$(ev.currentTarget).closest('.BountyRowWrap').find('.SumTotalPeso').text( numeral( sumTotal * UFVALUE ).format('0,0') )

					setTimeout( () => {
						if($data.attr('disabled') == 'disabled') {
							sumTotal -= parseFloat( $( data ).data('value-sum-uf') )
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
						$(ev.currentTarget).closest('.BountyRowWrap').find('.SumTotalUF').text( numeral(sumTotal).format( '0,0.00' ) )
						$(ev.currentTarget).closest('.BountyRowWrap').find('.SumTotalPeso').text( numeral( sumTotal * UFVALUE ).format('0,0') )
					}
				}

			})
		}

		else {
			$(ev.context).closest('.BountyRowWrap').find('.Bounty').each( (index, data) => {
				const $data = $(data)

				if( $data.is(':checked') ) {
					sumTotal += $( data ).data('value-sum-uf')

					setTimeout( () => {
						if($data.attr('disabled') == 'disabled') {
							sumTotal -= numeral( $( data ).data('value-sum-uf') ).format('0,0')
						}

						if ($(ev.context).closest('.BountyRowWrap').find(".Bounty:checkbox:checked").length <= 0) {
							sumTotal = 0
						}

						$(ev.context).closest('.BountyRowWrap').find('.SumTotalUF').text( numeral(sumTotal).format( '0,0.00' ) )
						$(ev.context).closest('.BountyRowWrap').find('.SumTotalPeso').text( numeral( sumTotal ).format('0,0') )

					}, 10)
				}
				else {
					$(ev.context).closest('.BountyRow').find(".InputCurrency").val(0)
					$(ev.context).closest('.BountyRow').nextUntil('.BountyRowDefault').find(".InputCurrency").val(0)
					if ($(ev.context).closest('.BountyRowWrap').find(".Bounty:checkbox:checked").length <= 0) {
						sumTotal = 0
						$(ev.context).closest('.BountyRowWrap').find('.SumTotalUF').text( numeral(sumTotal).format( '0,0.00' ) )
						$(ev.context).closest('.BountyRowWrap').find('.SumTotalPeso').text( numeral( sumTotal ).format('0,0') )
					}
				}

			})
		}

	}