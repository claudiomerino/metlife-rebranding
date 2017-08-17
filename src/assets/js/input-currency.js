
	let TotalSum = 0

	function inputCurrencyFn (value, el) {
		const total = value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
		$(el).val(`$ ${total}`);
		$(el).attr('normal-value', value);
		formSumFn()
	}

	function inputCurrencyCleanFn (el) {
		$(el).val('');
		$(el).attr('normal-value', 0);
		TotalSum = 0
		formSumFn()
	}