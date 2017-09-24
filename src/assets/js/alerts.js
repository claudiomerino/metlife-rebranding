
	const $alertClose = $('.alert-close')

	$alertClose.on('click', (e) => {
		e.preventDefault()

		$(e.currentTarget).closest('.alert').addClass('hide-xs')
	})