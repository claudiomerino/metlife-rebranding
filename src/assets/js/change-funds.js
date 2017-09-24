
	let $dataChangeFundsStock = $('[data-change-funds-stock]')
	let $dataChangeFunds = $('[data-change-funds]')
	let $dataChangeFundsFlow = $('[data-change-funds-flow]')
	let $dataChangeFundsStockTotal = $('[data-change-funds-stock-total]')
	let $dataChangeFundsFlowTotal = $('[data-change-funds-flow-total]')
	let $dataChangeFundsFlowTotalData = $('[data-change-funds-flow-total]').data('change-funds-flow-total')
	let $dataEditFundCheck = $('[data-edit-fund-check]')
	let $editFundsSubmit = $('.editFundsSubmit')
	let $changeFundsCancel = $('.changeFundsCancel')
	let $changeFundsEdit = $('.changeFundsEdit')
	let $changeFundsMessageCancel = $('.changeFundsMessageCancel')

	$dataEditFundCheck.on('change', (e) => {
		dataEditFundCheckFn(e, 'event')
	})

	$changeFundsEdit.on('click', (e) => {
		e.preventDefault()
		/**
		 * Edit button on mobile, change all fields to show
		 * Ready to edit
		 **/

		$(e.currentTarget).addClass('hide-edit-fields')
		$('.editFundsTitle').addClass('hide-xs')
		$('.editFundsTitle').siblings('.accordion-title').removeClass('hide-xs')
		$('.ChangeFundsContinueWrap').removeClass('hide-xs')

		const $target = $('.AccordionChangeFunds').find('.accordion-item:nth-of-type(n + 2) .accordion-content')
		$('.AccordionChangeFunds').foundation('up', $target);

		$('[data-edit-fund-check]').each( (index, el) => {
			$(el).attr('checked', true)
			dataEditFundCheckFn($(el), 'element')
		})
	})

	$changeFundsCancel.on('click', (e) => {
		e.preventDefault()

		$changeFundsEdit.removeClass('hide-xs')

		/**
		 * All checkbox disable and remove edit inputs
		 **/
		$('[data-edit-fund-check]').each( (index, el) => {
			$(el).attr('checked', false)
			dataEditFundCheckFn($(el), 'element')
		})

		/**
		 * Remove class to show alert error
		 **/
		$changeFundsMessageCancel.removeClass('hide-state-update')

		/**
		 * Scroll top to message cancel
		 **/
		setTimeout( () => {
   		$( 'html,body' ).animate({ scrollTop: $changeFundsMessageCancel.offset().top - 90 }, 'fast');
		}, 750 );
	})

	function dataEditFundCheckFn(e, type) {

		let editFundCheckValue
		let editFundCheckContentValue
		let editFundCheckTotalValue

		if(type == 'event') {
			editFundCheckValue = $(e.currentTarget).data('edit-fund-check')
			editFundCheckContentValue = $(e.currentTarget).closest('.distributionFunds').find(`[data-edit-fund-check-content="${editFundCheckValue}"]`)
			editFundCheckTotalValue = $(e.currentTarget).closest('.distributionFunds').find(`[data-edit-fund-check-total="${editFundCheckValue}"]`)
		}
		else {
			editFundCheckValue = $(e).data('edit-fund-check')
			editFundCheckContentValue = $(e).closest('.distributionFunds').find(`[data-edit-fund-check-content="${editFundCheckValue}"]`)
			editFundCheckTotalValue = $(e).closest('.distributionFunds').find(`[data-edit-fund-check-total="${editFundCheckValue}"]`)
		}

		editFundCheckContentValueFn(editFundCheckContentValue, type, e)
		editFundCheckTotalValueFn(editFundCheckTotalValue, type, e)
		showHideEditFieldsFn()
	}

	function showHideEditFieldsFn() {

		let checkedEditFunds

		$('[data-edit-fund-check]').each( (index, el) => {
			if($(el).is(':checked')) {
				checkedEditFunds = true
			}
		})

		if(checkedEditFunds == true) {
			$editFundsSubmit.removeClass('hide-edit-fields')
		}
		else {
			$editFundsSubmit.addClass('hide-edit-fields')
		}

	}

	function editFundCheckContentValueFn(editFundCheckContentValue, type, e) {

		editFundCheckContentValue.each( (index, el) => {

			if(type == 'event') {
				if($(e.currentTarget).is(':checked')) {
					$(el).find('input').removeClass('hide-edit-fields')
					$(el).find('.table_desc').addClass('hide-edit-fields')
				}
				else {
					$(el).find('input').addClass('hide-edit-fields')
					$(el).find('.table_desc').removeClass('hide-edit-fields')
				}
			}
			else {
				if($(e).is(':checked')) {
					$(el).find('input').removeClass('hide-edit-fields')
					$(el).find('.table_desc').addClass('hide-edit-fields')
				}
				else {
					$(el).find('input').addClass('hide-edit-fields')
					$(el).find('.table_desc').removeClass('hide-edit-fields')
				}
			}
		})

	}

	function editFundCheckTotalValueFn(editFundCheckTotalValue, type, e) {

		editFundCheckTotalValue.each( (index, el) => {
			if(type == 'event') {
				if($(e.currentTarget).is(':checked')) {
					$(el).find('.fieldsTotalFundsCol').removeClass('hide-xs-important')
				}
				else {
					$(el).find('.fieldsTotalFundsCol').addClass('hide-xs-important')
				}
			}
			else {
				if($(e).is(':checked')) {
					$(el).find('.fieldsTotalFundsCol').removeClass('hide-xs-important')
				}
				else {
					$(el).find('.fieldsTotalFundsCol').addClass('hide-xs-important')
				}
			}
		})

	}





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

				$(e.currentTarget).closest('.distributionFunds').find(`[data-edit-fund-check-total]`).each( (index, value) => {

					const totalFields = $($(e.currentTarget).closest('.distributionFunds').find(`[data-edit-fund-check-total]`)[`${index}`]).find('.fieldsTotalFundsValue').text()

					if($($(e.currentTarget).closest('.distributionFunds').find(`[data-edit-fund-check-total]`)[`${index}`]).find('.fieldsTotalFundsValue').hasClass('red')) {
						$(e.currentTarget).closest('.distributionFunds').find('.changeFundsSubmit').addClass('button-disabled')
					} else if(parseInt(totalFields) == 100) {
						$(e.currentTarget).closest('.distributionFunds').find('.changeFundsSubmit').removeClass('button-disabled')
					} else {
						$(e.currentTarget).closest('.distributionFunds').find('.changeFundsSubmit').addClass('button-disabled')
					}
				})

			})

			$(e.currentTarget).closest('.distributionFunds').find(`[data-edit-fund-check-total]`).each( (index, value) => {
				if(totalEditFunds > 100) {
					$($(e.currentTarget).closest('.distributionFunds').find(`[data-edit-fund-check-total="${fieldsDistributionFundsValue}"]`)[`${index}`]).find('.fieldsTotalFundsValue').addClass('red')
					$($(e.currentTarget).closest('.distributionFunds').find(`[data-edit-fund-check-total="${fieldsDistributionFundsValue}"]`)[`${index}`]).find('.distributionFundsPercentage').addClass('red')
				} else {
					$($(e.currentTarget).closest('.distributionFunds').find(`[data-edit-fund-check-total="${fieldsDistributionFundsValue}"]`)[`${index}`]).find('.fieldsTotalFundsValue').removeClass('red')
					$($(e.currentTarget).closest('.distributionFunds').find(`[data-edit-fund-check-total="${fieldsDistributionFundsValue}"]`)[`${index}`]).find('.distributionFundsPercentage').removeClass('red')
				}
			})

			$(`[data-edit-fund-check-total="${fieldsDistributionFundsValue}"]`).find('.fieldsTotalFundsValue').html(totalEditFunds)

		}, 1000)

	})