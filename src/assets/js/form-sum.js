
	let $InputSumButton = $('.InputSumButton')

	function formSumFn() {
		let $InputSum = $('input.InputSum')
		let $InputSumTotal = $('.InputSumTotal')

		$InputSum.each( (index, el) => {
			const min = parseInt($(el).attr("min"));
			const max = parseInt($(el).attr("max"));
			const value = parseInt($(el).attr('normal-value'));

			TotalSum += value

			if( $InputSum.hasClass('is-invalid-input') ) {
				$InputSumButton.addClass('button-disabled')
				$InputSumButton.on('click', (e) => {
					e.preventDefault()
				})
			} else {
				$InputSumButton.removeClass('button-disabled')
				$InputSumButton.unbind('click')
			}

			if(isNaN(TotalSum)) {
				$(el).val('');
				$(el).attr('normal-value', 0);
			}
		})

		$InputSumTotal.html(numeral(TotalSum).format('0,0'))
	}

	$InputSumButton.bind('click', (e) => {
		e.preventDefault()
	})