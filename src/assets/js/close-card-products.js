
	const $closeCardMain = $( '.closeCardMain' );
	const $closeCardMainButton = $( '.closeCardMainButton')

$closeCardMainButton.on( 'click', ( e ) => {
	e.preventDefault();
	console.log('click')
	$closeCardMain.toggleClass( 'hide' );
})
