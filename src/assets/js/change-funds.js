
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

		if( !$(e.currentTarget).is(':checked') ) {
			if( $(e.currentTarget).closest('.distributionFundsDesktop').find(`[data-edit-fund-check-total]`).hasClass('red') ) {
				$changeFundsSubmit.addClass('button-disabled')
			}
		}

		if( $(e.currentTarget).closest('.distributionFundsDesktop').find('[data-edit-fund-check]').is(':checked') ) {
			/* Si alguno esta checked active el botón */
			const editFundCheckValue = $(e.currentTarget).data('edit-fund-check')

			const totalValue = $(e.currentTarget).closest('.distributionFundsDesktop').find(`[data-edit-fund-check-total="${editFundCheckValue}"]`).find('.fieldsTotalFundsValue').text()

			const totalValueFunds = $(e.currentTarget).closest('.distributionFundsDesktop').find(`[data-edit-fund-check-total="${editFundCheckValue}"]`).find('.fieldsTotalFundsValue')

			if( parseInt(totalValue) == 100 ) {

				if( $(e.currentTarget).is(':checked') ) {
					$changeFundsSubmit.removeClass('button-disabled')
				}

				else {
					$changeFundsSubmit.removeClass('button-disabled')
				}

			}
			else {
				$changeFundsSubmit.addClass('button-disabled')
			}

			console.log(totalValueFunds, 'totalValueFunds')
			console.log($(totalValueFunds).hasClass('red'), 'totalValueFunds RED')

		}
		else {
			/* Si nunguno esta checked disabled el botón */
			$changeFundsSubmit.addClass('button-disabled')
		}

		dataEditFundCheckFn(e, 'event')
	})

	$changeFundsEdit.on('click', (e) => {
		e.preventDefault()
		/**
		 * Edit button on mobile, change all fields to show
		 * Ready to edit
		 **/

		$('.editFundsTitle').addClass('hide-xs')
		$('.editFundsTitle').siblings('.accordion-title').removeClass('hide-xs')
		$('.ChangeFundsContinueWrap').removeClass('hide-xs')
		$('.totalEditFieldsFunds').removeClass('hide-xs')

		const $targetAcordionChangeFunds = $('.AccordionChangeFunds').find('.accordion-item:nth-of-type(n + 2) .accordion-content')
		$('.AccordionChangeFunds').foundation('up', $targetAcordionChangeFunds);

		$('[data-edit-fund-check="apvStockCheck"]').each( (index, el) => {
			$(el).attr('checked', true)
			dataEditFundCheckFn($(el), 'element')
		})

		$('[data-edit-fund-check="apvFlowCheck"]').each( (index, el) => {
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


	$changeFundsCancel.on('click', (e) => {
		e.preventDefault()

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

	$changeFundsSubmit.on('click', (e) => {
		e.preventDefault()

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
	}

	function editFundCheckContentValueFn(editFundCheckContentValue, type, e) {

		editFundCheckContentValue.each( (index, el) => {

			if(type == 'event') {
				if($(e.currentTarget).is(':checked')) {
					$(el).find('input').prop('disabled', false)
				}
				else {
					$(el).find('input').prop('disabled', true)
				}
			}
			else {
				if($(e).is(':checked')) {
					$(el).find('input').prop('disabled', false)
				}
				else {
					$(el).find('input').prop('disabled', true)
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
		if(!$(e.currentTarget).hasClass('button-disabled')) {
			const $nextContinueFunds = $(e.currentTarget).closest('.accordion-item').next('.accordion-item').find('.accordion-content')

			$('.AccordionChangeFunds').foundation('up', $(e.currentTarget).closest('.accordion-content'));
			$('.AccordionChangeFunds').foundation('down', $nextContinueFunds);
		}
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

			})

			setTimeout( () => {

				let arrayValuesChange = []

				$(e.currentTarget).closest('.distributionFundsDesktop').find('.fieldsTotalFundsValue').each( (index, value) => {
					arrayValuesChange.push( $(value).hasClass('red') )
				})

				if($.inArray(true, arrayValuesChange) == -1) {
					$(e.currentTarget).closest('.distributionFunds').find('.changeFundsSubmit').removeClass('button-disabled')
				} else {
					$(e.currentTarget).closest('.distributionFunds').find('.changeFundsSubmit').addClass('button-disabled')
				}


				let arrayValuesChangeMobile = []

				$(e.currentTarget).closest('.accordion-content').find('.fieldsTotalFundsValue').each( (index, value) => {
					arrayValuesChangeMobile.push( $(value).hasClass('red') )
				})

				if($.inArray(true, arrayValuesChangeMobile) == -1) {
					$(e.currentTarget).closest('.distributionFunds').find('.ChangeFundsContinue').removeClass('button-disabled')
				} else {
					$(e.currentTarget).closest('.distributionFunds').find('.ChangeFundsContinue').addClass('button-disabled')
				}

			}, 100)

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