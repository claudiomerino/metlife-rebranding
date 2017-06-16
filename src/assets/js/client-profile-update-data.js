
	const $buttonUpdate = $('#clientProfileUpdateData')
	const $clientProfileCancelUpdateData = $('#clientProfileCancelUpdateData')
	const $clientProfileSaveUpdateData = $('#clientProfileSaveUpdateData')
	const $clientProfileEdit = $('.clientProfileEdit')
	const $clientProfileInitialData = $('.clientProfileInitialData')
	const $ClientProfileToggleHide = $('.ClientProfileToggleHide')

	$buttonUpdate.on('click', (e) => {
		e.preventDefault()

		$clientProfileCancelUpdateData
			.add($clientProfileSaveUpdateData)
			.add($clientProfileEdit)
			.removeClass('hide-xs')

		$clientProfileInitialData
			.add($buttonUpdate)
			.add($ClientProfileToggleHide)
			.addClass('hide-xs')

	})

	$clientProfileCancelUpdateData.add($clientProfileSaveUpdateData).on('click', (e) => {
		e.preventDefault()

		$clientProfileCancelUpdateData
			.add($clientProfileSaveUpdateData)
			.add($clientProfileEdit)
			.addClass('hide-xs')

		$buttonUpdate
			.add($clientProfileInitialData)
			.add($ClientProfileToggleHide)
			.removeClass('hide-xs')
	})