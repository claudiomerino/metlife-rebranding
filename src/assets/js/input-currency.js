
	function inputCurrencyFn (value, el) {
		const total = numeral(value).format('0,0');
		$(el).val(total);
	}