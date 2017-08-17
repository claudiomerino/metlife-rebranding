
	const $dataEditFieldsButton = $('[data-edit-fields-button]')
	const $dataEditFields = $('[data-edit-fields]')

	console.log($dataEditFieldsButton, 'DataEditFieldsButton')

	$dataEditFieldsButton.each( (index, el) => {
		const value = $(el).data('edit-fields-button')
		console.log(value, 'value')
	})

	$dataEditFields.each( (index, el) => {
		const test = $(el).data('edit-fields')
		console.log(index)
		console.log(el)
		console.log(test, 'value edit fields')
	})