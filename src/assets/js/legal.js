
	const $AcceptLegal = $('.AcceptLegal')
	const $AcceptLegalSubmit = $('.AcceptLegalSubmit')

	$AcceptLegalSubmit.on('click', (e) => {
		const $currentTarget = $(e.currentTarget)
		if( $currentTarget.hasClass('button-disabled') ) {
			e.preventDefault();
		}
	})

	$AcceptLegal.on('click', (e) => {
		const $currentTarget = $(e.currentTarget)
		if( $AcceptLegal.is(':checked') ) {
			$AcceptLegalSubmit.removeClass('button-disabled')
		} else {
			$AcceptLegalSubmit.addClass('button-disabled')
		}
	})