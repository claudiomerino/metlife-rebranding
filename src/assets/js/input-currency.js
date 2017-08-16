
	function inputCurrencyFn (value, el) {
		const total = value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
		$(el).val(`$ ${total}`);
		$(el).attr('normal-value', value);
	}

	function inputCurrencyCleanFn (el) {
		$(el).val('');
	}