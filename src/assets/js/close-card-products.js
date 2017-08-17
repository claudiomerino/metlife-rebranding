
	const $closeCardMain = $( '.closeCardMain' );
	const $closeCardMainButton = $( '.closeCardMainButton')

	$closeCardMainButton.on( 'click', ( e ) => {
		e.preventDefault();
		$closeCardMain.toggleClass( 'hide' );
	})