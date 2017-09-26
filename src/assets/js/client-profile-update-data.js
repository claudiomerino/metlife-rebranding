
	const $buttonUpdate = $('.clientProfileUpdateData')
	const $clientProfileCancelUpdateData = $('.clientProfileCancelUpdateData')
	const $clientProfileSaveUpdateData = $('.clientProfileSaveUpdateData')
	const $clientProfileEdit = $('.clientProfileEdit')
	const $clientProfileInitialData = $('.clientProfileInitialData')
	const $ClientProfileToggleHide = $('.ClientProfileToggleHide')
	const $ClientProfileMessageSuccess = $('.ClientProfileMessageSuccess')
	const $ClientProfileMessageCancel = $('.ClientProfileMessageCancel')
	const $UpdateDataFormInput = $('.UpdateDataForm')

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

	$clientProfileSaveUpdateData.on('click', (e) => {
		e.preventDefault()

		if(!$(e.currentTarget).hasClass('button-disabled')) {
			const invalid = 'false'
			InitialStateFn( invalid )
		}

	})


	function InitialStateFn( invalid, cancel ) {
		if( invalid === 'false' ) {
			$clientProfileCancelUpdateData
				.add($clientProfileSaveUpdateData)
				.add($clientProfileEdit)
				.addClass('hide-state-update')

			$buttonUpdate
				.add($clientProfileInitialData)
				.add($ClientProfileToggleHide)
				.add($ClientProfileMessageSuccess)
				.removeClass('hide-state-update')

			setTimeout( () => {
      	$( 'html,body' ).animate({ scrollTop: $ClientProfileMessageSuccess.offset().top - 90 }, 'fast');
			}, 750 );

		}
		else if( cancel === 'true' ) {

			$clientProfileCancelUpdateData
				.add($clientProfileSaveUpdateData)
				.add($clientProfileEdit)
				.addClass('hide-state-update')

			$buttonUpdate
				.add($clientProfileInitialData)
				.add($ClientProfileToggleHide)
				.add($ClientProfileMessageCancel)
				.removeClass('hide-state-update')

			setTimeout( () => {
     		$( 'html,body' ).animate({ scrollTop: $ClientProfileMessageCancel.offset().top - 90 }, 'fast');
			}, 750 );

		}
	}

	function UpdateStateFn() {
		$clientProfileCancelUpdateData
			.add($clientProfileSaveUpdateData)
			.add($clientProfileEdit)
			.removeClass('hide-state-update')

		$clientProfileInitialData
			.add($buttonUpdate)
			.add($ClientProfileToggleHide)
			.addClass('hide-state-update')
      $('.rutUpdate').addClass('f-tiny-rut')

	}

	$('.UpdateDataForm .input__field').on('keydown', (e) => {
		validateFunctionUpdateData()
	})

	$('.AcceptLegal').on('click', () => {
		validateFunctionUpdateData()
	})

	function validateFunctionUpdateData () {
		setTimeout( () => {
			if($('.UpdateDataForm').find('.is-invalid-input').length > 0) {
				$clientProfileSaveUpdateData.addClass('button-disabled')
			}
			else {
				$clientProfileSaveUpdateData.removeClass('button-disabled')
			}
		}, 1000)
	}