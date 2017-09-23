
	let $dataChangeFundsStock = $('[data-change-funds-stock]')
	let $dataChangeFunds = $('[data-change-funds]')
	let $dataChangeFundsFlow = $('[data-change-funds-flow]')
	let $dataChangeFundsStockTotal = $('[data-change-funds-stock-total]')
	let $dataChangeFundsFlowTotal = $('[data-change-funds-flow-total]')
	let $dataChangeFundsFlowTotalData = $('[data-change-funds-flow-total]').data('change-funds-flow-total')
	let $dataEditFieldsSubmit = $('[data-edit-fields-submit]')
	let $dataEditFundCheck = $('[data-edit-fund-check]')
	let $editFundsSubmit = $('.editFundsSubmit')


	$dataEditFundCheck.on('change', (e) => {
		const editFundCheckValue = $(e.currentTarget).data('edit-fund-check')
		const editFundCheckContentValue = $(e.currentTarget).closest('.distributionFunds').find(`[data-edit-fund-check-content="${editFundCheckValue}"]`)
		const editFundCheckTotalValue = $(e.currentTarget).closest('.distributionFunds').find(`[data-edit-fund-check-total="${editFundCheckValue}"]`)

		let checkedEditFunds


		$('[data-edit-fund-check]').each( (index, el) => {
			if($(el).is(':checked')) {
				console.log('entra')
				checkedEditFunds = true
			}
		})
		console.log(checkedEditFunds, 'checkedEditFunds')

		if(checkedEditFunds == true) {
			$editFundsSubmit.removeClass('hide-edit-fields')
		}
		else {
			$editFundsSubmit.addClass('hide-edit-fields')
		}

		editFundCheckContentValue.each( (index, el) => {
			if($(e.currentTarget).is(':checked')) {
				$(el).find('input').removeClass('hide-edit-fields')
				$(el).find('.table_desc').addClass('hide-edit-fields')
			}
			else {
				$(el).find('input').addClass('hide-edit-fields')
				$(el).find('.table_desc').removeClass('hide-edit-fields')
			}
		})

		editFundCheckTotalValue.each( (index, el) => {
			if($(e.currentTarget).is(':checked')) {
				$(el).find('.fieldsTotalFundsCol').removeClass('hide-xs-important')
			}
			else {
				$(el).find('.fieldsTotalFundsCol').addClass('hide-xs-important')
			}
		})
	})





	$dataChangeFunds.on('keydown', (e) => {

		if (e.which != 8 && e.which != 0 && (e.which < 48 || e.which > 57)) {
			return false;
    }

		let fieldsDistributionFundsValue = $(e.currentTarget).closest('.fieldsDistributionFunds').data('edit-fund-check-content')
		let totalEditFunds = 0

		setTimeout( () => {


			$(e.currentTarget).closest('.distributionFunds').find(`[data-edit-fund-check-content="${fieldsDistributionFundsValue}"]`).each( (index, el) => {

				let dataFundsValue = parseInt($(el).find('input').val())

				if(isNaN(dataFundsValue)) {
					$(el).find('input').val(0)
					dataFundsValue = parseInt($(el).find('input').val())
					$(el).find('input').val('')
				}

				totalEditFunds += dataFundsValue

				const totalFields = $($(e.currentTarget).closest('.distributionFunds').find(`[data-edit-fund-check-total]`)[0]).find('.fieldsTotalFundsValue').text()
				console.log(totalEditFunds, 'totalEditFunds')
				console.log(totalFields, 'totalFields')

				if($($(e.currentTarget).closest('.distributionFunds').find(`[data-edit-fund-check-total]`)[0]).find('.fieldsTotalFundsValue').hasClass('red')) {
					$(e.currentTarget).closest('.distributionFunds').find('[data-edit-fields-submit]').addClass('button-disabled')
				} else if(parseInt(totalFields) == 100) {
					$(e.currentTarget).closest('.distributionFunds').find('[data-edit-fields-submit]').removeClass('button-disabled')
				} else {
					$(e.currentTarget).closest('.distributionFunds').find('[data-edit-fields-submit]').addClass('button-disabled')
				}

			})

			if(totalEditFunds > 100) {
				$($(e.currentTarget).closest('.distributionFunds').find(`[data-edit-fund-check-total="${fieldsDistributionFundsValue}"]`)[0]).find('.fieldsTotalFundsValue').addClass('red')
				$($(e.currentTarget).closest('.distributionFunds').find(`[data-edit-fund-check-total="${fieldsDistributionFundsValue}"]`)[0]).find('.distributionFundsPercentage').addClass('red')
			} else {
				$($(e.currentTarget).closest('.distributionFunds').find(`[data-edit-fund-check-total="${fieldsDistributionFundsValue}"]`)[0]).find('.fieldsTotalFundsValue').removeClass('red')
				$($(e.currentTarget).closest('.distributionFunds').find(`[data-edit-fund-check-total="${fieldsDistributionFundsValue}"]`)[0]).find('.distributionFundsPercentage').removeClass('red')
			}

			$(`[data-edit-fund-check-total="${fieldsDistributionFundsValue}"]`).find('.fieldsTotalFundsValue').html(totalEditFunds)

		}, 1000)

	})





/*

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

	}) */