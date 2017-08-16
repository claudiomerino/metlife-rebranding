
	let $InputSum = $('input.InputSum')
	let $InputSumTotal = $('.InputSumTotal')
	let total = 0

	$InputSum.each( (index, el) => {
		$(el).change( function() {
			var min = parseInt($(this).attr("min"));
			var max = parseInt($(this).attr("max"));
			var value = parseInt($(this).val());

			console.log(value, 'change value')
			console.log($InputSumTotal, 'change $InputSumTotal')

			total += value
			console.log(total, 'total')

			inputCurrencyFn(value, $(el))

			$InputSumTotal.html(numeral(total).format('0,0'))
		})

		$(el).focus( function() {
			inputCurrencyCleanFn($(el))
		})
	})