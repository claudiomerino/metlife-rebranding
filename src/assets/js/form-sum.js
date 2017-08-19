
	let $InputSumButton = $('.InputSumButton')
	let $InputSum = $('.InputSum')
	let $InputSumTotal = $('.InputSumTotal')

	$InputSum.on( 'keydown', (e) => {

    setTimeout( () => {
    	let sumTotal = 0
			let $ArrayInputSum = $(e.currentTarget).closest('.InputSumForm').find('.InputSum')

			$ArrayInputSum.each( (index, el) => {
				const value = $(el).val()

				$(el).attr('normal-value', numeral(value).format('0'))

				let normalValueSum = parseInt( $(el).attr('normal-value') )

				sumTotal += normalValueSum
			})

			$InputSumTotal.html(numeral(sumTotal).format('0,0'))
		}, 1000)

	})

	function invalidInputSumFn(el) {
		if( $(el).closest('.InputSumForm').find('.InputSum').hasClass('is-invalid-input') ) {
			$InputSumButton.addClass('button-disabled')
		} else {
			$InputSumButton.removeClass('button-disabled')
		}
	}