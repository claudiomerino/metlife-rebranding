
	let $dataEditFieldsButton = $('[data-edit-fields-button]')
	let $dataEditFields = $('[data-edit-fields]')
	let $togglEditFields = $('.toggl-edit-fields')
	let $editFieldsCancel = $('[data-edit-fields-cancel]')
	let $editFieldsSubmit = $('[data-edit-fields-submit]')
	let $showEditFields = $('.show-edit-fields')
	let dataFields;

	$dataEditFieldsButton.on('click', (e) => {
		e.preventDefault()
		let $currentTarget = $(e.currentTarget)
		dataFields = $currentTarget.closest('.distributionFunds').find('[data-edit-fields-button]').data('edit-fields-button')

		$currentTarget.addClass('hide-edit-fields')
		$('.clientProfileUpdateData').removeClass('hide-state-update')
		$currentTarget.closest('.distributionFunds').find('.show-edit-fields').removeClass('hide-edit-fields')

		const valueEditFieldsButton = $currentTarget.closest('.distributionFunds').find('[data-edit-fields-button]').data('edit-fields-button')
		const $editFields = $currentTarget.closest('.distributionFunds').find('[data-edit-fields]')

		toggleEditFieldsFn($editFields, valueEditFieldsButton, false)

	})


	$editFieldsCancel.on('click', (e) => {
		e.preventDefault()
		if($(e.currentTarget).closest('.distributionFunds').find('[data-edit-fields-cancel]').data('edit-fields-cancel') == dataFields) {
			$(e.currentTarget).closest('.distributionFunds').find('[data-edit-fields-button]').removeClass('hide-edit-fields')
			$(e.currentTarget).closest('.distributionFunds').find('.show-edit-fields').addClass('hide-edit-fields')
			const $editFields = $(e.currentTarget).closest('.distributionFunds').find('[data-edit-fields]')
			toggleEditFieldsFn($editFields, $(e.currentTarget).closest('.distributionFunds').find('[data-edit-fields-cancel]').data('edit-fields-cancel'), true)
		}
	})

	$editFieldsSubmit.on('click', (e) => {
		e.preventDefault()
		if(!$(e.currentTarget).closest('.distributionFunds').find('[data-edit-fields-submit]').hasClass('button-disabled')) {
			$dataEditFieldsButton.removeClass('hide-edit-fields')
			$showEditFields.addClass('hide-edit-fields')
			const $editFields = $(e.currentTarget).closest('.distributionFunds').find('[data-edit-fields]')
			toggleEditFieldsFn($editFields, $(e.currentTarget).closest('.distributionFunds').find('[data-edit-fields-cancel]').data('edit-fields-cancel'), true)
		}
	})

	function toggleEditFieldsFn(editFields, value, cancel) {

		$(editFields).each( (index, el) => {
			const valueEditFields = $(el).data('edit-fields')

			if(value == valueEditFields) {
				if(cancel) {
					$(el).addClass('hide-edit-fields')
					$(el).closest('.distributionFunds').find('.toggl-edit-fields').removeClass('hide-edit-fields')
				} else {
					$(el).removeClass('hide-edit-fields')
					$(el).closest('.distributionFunds').find('.toggl-edit-fields').addClass('hide-edit-fields')
				}
			} else {
				if(cancel) {
					$(el).removeClass('hide-edit-fields')
					$(el).closest('.distributionFunds').find('.toggl-edit-fields').addClass('hide-edit-fields')
				} else {
					$(el).addClass('hide-edit-fields')
					$(el).closest('.distributionFunds').find('.toggl-edit-fields').removeClass('hide-edit-fields')
				}
			}

		})

	}