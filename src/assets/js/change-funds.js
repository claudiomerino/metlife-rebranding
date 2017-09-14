
	let $dataChangeFundsStock = $('[data-change-funds-stock]')
	let $dataChangeFundsFlow = $('[data-change-funds-flow]')
	let $dataChangeFundsStockTotal = $('[data-change-funds-stock-total]')
	let $dataChangeFundsFlowTotal = $('[data-change-funds-flow-total]')
	let $dataChangeFundsFlowTotalData = $('[data-change-funds-flow-total]').data('change-funds-flow-total')
	let $dataEditFieldsSubmit = $('[data-edit-fields-submit]')


	$dataChangeFundsStock.on('keydown', (e) => {

		if (e.which != 8 && e.which != 0 && (e.which < 48 || e.which > 57)) {
			return false;
    }

		setTimeout( () => {

			let totalEditFunds = 0

			$(e.currentTarget).closest('.distributionFunds').find('[data-change-funds-stock]').each( (index, el) => {

				let dataFundsValue = parseInt($(el).val())

				if(isNaN(dataFundsValue)) {
					$(el).val(0)
					dataFundsValue = parseInt($(el).val())
					$(el).val('')
				}

				totalEditFunds += dataFundsValue

			})

			if(totalEditFunds > 100) {
				$(e.currentTarget).closest('.distributionFunds').find('[data-change-funds-stock-total]').addClass('red')
				$(e.currentTarget).closest('.distributionFunds').find('.distributionFundsPercentage').addClass('red')
			} else {
				$(e.currentTarget).closest('.distributionFunds').find('[data-change-funds-stock-total]').removeClass('red')
				$(e.currentTarget).closest('.distributionFunds').find('.distributionFundsPercentage').removeClass('red')
			}

			let $dataChangeFundsFlowTotalData = parseInt($(e.currentTarget).closest('.distributionFunds').find('[data-change-funds-flow-total]').text())

			if(totalEditFunds > 100 || $dataChangeFundsFlowTotalData > 100) {
				$(e.currentTarget).closest('.distributionFunds').find('[data-edit-fields-submit]').addClass('button-disabled')
			} else if(totalEditFunds == 100 && $dataChangeFundsFlowTotalData == 100) {
				$(e.currentTarget).closest('.distributionFunds').find('[data-edit-fields-submit]').removeClass('button-disabled')
			} else {
				$(e.currentTarget).closest('.distributionFunds').find('[data-edit-fields-submit]').addClass('button-disabled')
			}

			$(e.currentTarget).closest('.distributionFunds').find('[data-change-funds-stock-total]').html(totalEditFunds)

		}, 1000)

	})


	$dataChangeFundsFlow.on('keydown', (e) => {

		if (e.which != 8 && e.which != 0 && (e.which < 48 || e.which > 57)) {
			return false;
    }

		setTimeout( () => {

			let totalEditFundsFlow = 0

			$(e.currentTarget).closest('.distributionFunds').find('[data-change-funds-flow]').each( (index, el) => {

				let dataFundsFlowValue = parseInt($(el).val())

				if(isNaN(dataFundsFlowValue)) {
					$(el).val(0)
					dataFundsFlowValue = parseInt($(el).val())
					$(el).val('')
				}

				totalEditFundsFlow += dataFundsFlowValue

			})

			if(totalEditFundsFlow > 100) {
				$(e.currentTarget).closest('.distributionFunds').find('[data-change-funds-flow-total]').addClass('red')
				$(e.currentTarget).closest('.distributionFunds').find('.distributionFundsFlowPercentage').addClass('red')
			} else {
				$(e.currentTarget).closest('.distributionFunds').find('[data-change-funds-flow-total]').removeClass('red')
				$(e.currentTarget).closest('.distributionFunds').find('.distributionFundsFlowPercentage').removeClass('red')
			}

			let $dataChangeFundsStockTotalData = parseInt($(e.currentTarget).closest('.distributionFunds').find('[data-change-funds-stock-total]').text())

			if(totalEditFundsFlow > 100 || $dataChangeFundsStockTotalData > 100) {
				$(e.currentTarget).closest('.distributionFunds').find('[data-edit-fields-submit]').addClass('button-disabled')
			} else if(totalEditFundsFlow == 100 && $dataChangeFundsStockTotalData == 100) {
				$(e.currentTarget).closest('.distributionFunds').find('[data-edit-fields-submit]').removeClass('button-disabled')
			} else {
				$(e.currentTarget).closest('.distributionFunds').find('[data-edit-fields-submit]').addClass('button-disabled')
			}

			$(e.currentTarget).closest('.distributionFunds').find('[data-change-funds-flow-total]').html(totalEditFundsFlow)

		}, 1000)

	})