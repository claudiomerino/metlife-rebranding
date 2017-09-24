
	let $dataChangeFundsStock = $('[data-change-funds-stock]')
	let $dataChangeFunds = $('[data-change-funds]')
	let $dataChangeFundsFlow = $('[data-change-funds-flow]')
	let $dataChangeFundsStockTotal = $('[data-change-funds-stock-total]')
	let $dataChangeFundsFlowTotal = $('[data-change-funds-flow-total]')
	let $dataChangeFundsFlowTotalData = $('[data-change-funds-flow-total]').data('change-funds-flow-total')
	let $dataEditFundCheck = $('[data-edit-fund-check]')
	let $editFundsSubmit = $('.editFundsSubmit')
	let $changeFundsCancel = $('.changeFundsCancel')
	let $changeFundsSubmit = $('.changeFundsSubmit')
	let $changeFundsEdit = $('.changeFundsEdit')
	let $changeFundsMessageCancel = $('.changeFundsMessageCancel')
	let $changeFundsMessageSuccess = $('.changeFundsMessageSuccess')
	let $ChangeFundsContinueCheckbox = $('.ChangeFundsContinueCheckbox')

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

		const $targetAcordionChangeFunds = $('.AccordionChangeFunds').find('.accordion-item:nth-of-type(n + 2) .accordion-content')
		$('.AccordionChangeFunds').foundation('up', $targetAcordionChangeFunds);

		$('[data-edit-fund-check]').each( (index, el) => {
			$(el).attr('checked', true)
			dataEditFundCheckFn($(el), 'element')
		})
	})

	$ChangeFundsContinueCheckbox.on('click', (e) => {
		if($(e.currentTarget).is(':checked')) {
			$('.SameDistributionChange').removeClass('hide-xs')
			$('.SameDistributionInitial').addClass('hide-xs')

			$('.AccordionChangeFunds').find('.accordion-item:nth-of-type(n + 2)').addClass('inactive-accordion')
		}
		else {
			$('.SameDistributionChange').addClass('hide-xs')
			$('.SameDistributionInitial').removeClass('hide-xs')

			$('.AccordionChangeFunds').find('.accordion-item:nth-of-type(n + 2)').removeClass('inactive-accordion')
		}
	})

	$('.AccordionChangeFunds').find('.accordion-item .accordion-title').on('click', (e) => {
		e.preventDefault()

		if($ChangeFundsContinueCheckbox.is(':checked')) {
			const $AcordionChangeCheckFunds = $('.AccordionChangeFunds').find('.accordion-item:nth-of-type(n + 2) .accordion-content')
			$('.AccordionChangeFunds').foundation('up', $targetAcordionChangeFunds);
		}
	})


	$changeFundsCancel.on('click', (e) => {
		e.preventDefault()

		$changeFundsEdit.removeClass('hide-edit-fields')

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
		$('.editFundsTitle').removeClass('hide-xs')
		$('.editFundsTitle').siblings('.accordion-title').addClass('hide-xs')

		$('.ChangeFundsContinueWrap').addClass('hide-xs')

		const $AcordionChangeCheckFunds = $('.AccordionChangeFunds').find('.accordion-item .accordion-content')

		$('.AccordionChangeFunds').foundation('down', $AcordionChangeCheckFunds);

		$('.AccordionChangeFunds').find('.accordion-item:nth-of-type(n + 2)').removeClass('inactive-accordion')

		$('.AccordionChangeFunds').find('.accordion-item').addClass('is-active')

		/**
		 * Scroll top to message cancel
		 **/
		setTimeout( () => {
   		$( 'html,body' ).animate({ scrollTop: $changeFundsMessageCancel.offset().top - 90 }, 'fast');
		}, 750 );
	})

	$changeFundsSubmit.on('click', (e) => {
		e.preventDefault()

		$changeFundsEdit.removeClass('hide-edit-fields')

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
		$changeFundsMessageSuccess.removeClass('hide-state-update')
		$('.editFundsTitle').removeClass('hide-xs')
		$('.editFundsTitle').siblings('.accordion-title').addClass('hide-xs')

		$('.ChangeFundsContinueWrap').addClass('hide-xs')

		const $AcordionChangeCheckFunds = $('.AccordionChangeFunds').find('.accordion-item .accordion-content')

		$('.AccordionChangeFunds').foundation('down', $AcordionChangeCheckFunds);

		$('.AccordionChangeFunds').find('.accordion-item:nth-of-type(n + 2)').removeClass('inactive-accordion')

		$('.AccordionChangeFunds').find('.accordion-item').addClass('is-active')

		/**
		 * Scroll top to message cancel
		 **/
		setTimeout( () => {
   		$( 'html,body' ).animate({ scrollTop: $changeFundsMessageSuccess.offset().top - 90 }, 'fast');
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
					$(el).find('input').attr('disabled', false)
					$(el).find('.table_desc').addClass('hide-edit-fields')
				}
				else {
					$(el).find('input').addClass('hide-edit-fields')
					$(el).find('.input__calculate_show').removeClass('hide-edit-fields')
					$(el).find('input').attr('disabled', true)
					$(el).find('.table_desc').removeClass('hide-edit-fields')
				}
			}
			else {
				if($(e).is(':checked')) {
					$(el).find('input').removeClass('hide-edit-fields')
					$(el).find('input').attr('disabled', false)
					$(el).find('.table_desc').addClass('hide-edit-fields')
				}
				else {
					$(el).find('input').addClass('hide-edit-fields')
					$(el).find('.input__calculate_show').removeClass('hide-edit-fields')
					$(el).find('input').attr('disabled', true)
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


	/**
	 * Continue click
	 **/

	const $ChangeFundsContinue = $('.ChangeFundsContinue')

	$ChangeFundsContinue.on('click', (e) => {
		e.preventDefault()
		const $nextContinueFunds = $(e.currentTarget).closest('.accordion-item').next('.accordion-item').find('.accordion-content')

		$('.AccordionChangeFunds').foundation('up', $(e.currentTarget).closest('.accordion-content'));
		$('.AccordionChangeFunds').foundation('down', $nextContinueFunds);
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

				let arrayValuesChange = []

				$(e.currentTarget).closest('.distributionFundsDesktop').find(`[data-edit-fund-check-total]`).each( (index, value) => {

					const dataEditFundTotal = $(value)
					const findDataEditFundTotal = $(dataEditFundTotal).find('.fieldsTotalFundsValue')

					arrayValuesChange.push( $($(dataEditFundTotal).find('.fieldsTotalFundsValue')[0]).hasClass('red') )

					console.log($(dataEditFundTotal), 'dataEditFundTotal')
					console.log($(findDataEditFundTotal), 'sd jbsdjhf bshjdf bshjdfb jhsdjbf ')

					if($.inArray('true', arrayValuesChange) == -1){
						console.log('entra sjd kfsdjb fn', $.inArray('true', arrayValuesChange))
					    // the element is not in the array
					};


					if($($(e.currentTarget).closest('.distributionFunds').find(`[data-edit-fund-check-total]`)[`${index}`]).find('.fieldsTotalFundsValue').hasClass('red')) {
						$(e.currentTarget).closest('.distributionFunds').find('.changeFundsSubmit').addClass('button-disabled')
					} else {
						console.log('entra else')
						$(e.currentTarget).closest('.distributionFunds').find('.changeFundsSubmit').removeClass('button-disabled')
					}
				})

				console.log(arrayValuesChange, 'arrayValuesChange')

			})

			$(e.currentTarget).closest('.distributionFunds').find(`[data-edit-fund-check-total]`).each( (index, value) => {
				if(totalEditFunds > 100 || totalEditFunds < 100) {
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