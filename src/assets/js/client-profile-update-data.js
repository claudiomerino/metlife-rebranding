
	const $buttonUpdate = $('#clientProfileUpdateData')
	const $clientProfileCancelUpdateData = $('#clientProfileCancelUpdateData')
	const $clientProfileSaveUpdateData = $('#clientProfileSaveUpdateData')
	const $clientProfileEdit = $('.clientProfileEdit')
	const $clientProfileInitialData = $('.clientProfileInitialData')
	const $ClientProfileToggleHide = $('.ClientProfileToggleHide')
	const $ClientProfileMessageSuccess = $('#ClientProfileMessageSuccess')
	const $ClientProfileMessageCancel = $('#ClientProfileMessageCancel')
	const $UpdateDataFormInput = $('#UpdateDataForm')

	$buttonUpdate.on('click', (e) => {
		e.preventDefault()

		UpdateStateFn()
	})

	$clientProfileCancelUpdateData.on('click', (e) => {
		e.preventDefault()

		const cancel = 'true'
		const invalid = true

		InitialStateFn( invalid, cancel )
	})

	$UpdateDataFormInput.on('submit', (e) => {
		e.preventDefault()

		const invalid = 'false'
		InitialStateFn( invalid )
	})


	function InitialStateFn( invalid, cancel ) {
		if( invalid === 'false' ) {
			$clientProfileCancelUpdateData
				.add($clientProfileSaveUpdateData)
				.add($clientProfileEdit)
				.addClass('hide-xs')

			$buttonUpdate
				.add($clientProfileInitialData)
				.add($ClientProfileToggleHide)
				.add($ClientProfileMessageSuccess)
				.removeClass('hide-xs')

			setTimeout( () => {
				$ClientProfileMessageSuccess
					.addClass('hide-xs')
			}, 5000 );
		}
		else if( cancel === 'true' ) {

			$clientProfileCancelUpdateData
				.add($clientProfileSaveUpdateData)
				.add($clientProfileEdit)
				.addClass('hide-xs')

			$buttonUpdate
				.add($clientProfileInitialData)
				.add($ClientProfileToggleHide)
				.add($ClientProfileMessageCancel)
				.removeClass('hide-xs')

			setTimeout( () => {
				$ClientProfileMessageCancel
					.addClass('hide-xs')
			}, 5000 );
		}
	}

	function UpdateStateFn() {
		$clientProfileCancelUpdateData
			.add($clientProfileSaveUpdateData)
			.add($clientProfileEdit)
			.removeClass('hide-xs')

		$clientProfileInitialData
			.add($buttonUpdate)
			.add($ClientProfileToggleHide)
			.addClass('hide-xs')
	}