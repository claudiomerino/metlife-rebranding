
	const $closeCardMain = $( '.closeCardMain' );
	const $closeCardMainButton = $( '.closeCardMainButton')

$closeCardMainButton.on( 'click', ( e ) => {
	e.preventDefault();
	console.log('click')
	$closeCardMain.toggleClass( 'hide' );
})



	const $accordion = $( '.accordion' )
	const $tabsWrap = $( '.tabs_wrap' )

	console.log($accordion, 'ACCORDION')
	console.log($tabsWrap, 'tabsWrap')


	if($accordion.length > 0) {
		console.log('hay html')
	}
	else {
		console.log('no hay')
	}