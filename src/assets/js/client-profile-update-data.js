
	const $buttonUpdate = $('#clientProfileUpdateData')
	const $clientProfileCancelUpdateData = $('#clientProfileCancelUpdateData')
	const $clientProfileSaveUpdateData = $('#clientProfileSaveUpdateData')
	const $clientProfileEdit = $('.clientProfileEdit')
	const $clientProfileInitialData = $('.clientProfileInitialData')

	$buttonUpdate.on('click', (e) => {
		e.preventDefault()

		$clientProfileEdit.removeClass('hide-xs')
		$clientProfileInitialData.addClass('hide-xs')
		$clientProfileCancelUpdateData.add($clientProfileSaveUpdateData).removeClass('hide-xs')
		$buttonUpdate.addClass('hide-xs')
	})

	$clientProfileCancelUpdateData.add($clientProfileSaveUpdateData).on('click', (e) => {
		e.preventDefault()

		$clientProfileEdit.addClass('hide-xs')
		$clientProfileInitialData.removeClass('hide-xs')
		$clientProfileCancelUpdateData.add($clientProfileSaveUpdateData).addClass('hide-xs')
		$buttonUpdate.removeClass('hide-xs')
	})