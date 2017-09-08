
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
		dataFields = $($currentTarget).data('edit-fields-button')

		$currentTarget.addClass('hide-edit-fields')
		$showEditFields.removeClass('hide-edit-fields')

		$currentTarget.each( (index, el) => {
			const valueEditFieldsButton = $(el).data('edit-fields-button')
			toggleEditFieldsFn(valueEditFieldsButton, false)
		})

	})


	$editFieldsCancel.add($editFieldsSubmit).on('click', (e) => {
		e.preventDefault()
		console.log(dataFields, 'dataFields')
		if($editFieldsCancel.data('edit-fields-cancel') == dataFields) {
			$dataEditFieldsButton.removeClass('hide-edit-fields')
			$showEditFields.addClass('hide-edit-fields')
			toggleEditFieldsFn($editFieldsCancel.data('edit-fields-cancel'), true)
		}
	})

	function toggleEditFieldsFn(value, cancel) {

		$dataEditFields.each( (index, el) => {
			const valueEditFields = $(el).data('edit-fields')

			if(value == valueEditFields) {
				if(cancel) {
					$(el).addClass('hide-edit-fields')
					$togglEditFields.removeClass('hide-edit-fields')
				} else {
					$(el).removeClass('hide-edit-fields')
					$togglEditFields.addClass('hide-edit-fields')
				}
			} else {
				if(cancel) {
					$(el).removeClass('hide-edit-fields')
					$togglEditFields.addClass('hide-edit-fields')
				} else {
					$(el).addClass('hide-edit-fields')
					$togglEditFields.removeClass('hide-edit-fields')
				}
			}

		})

	}