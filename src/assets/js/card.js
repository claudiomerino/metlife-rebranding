
	let $openContent = $( '.openContent' );
	let $toggleContent = $( '.toggleContent' ).data( 'toggle-content' );

	$openContent.on( 'click', ( e ) => {
		e.preventDefault();
		e.stopPropagation();


		let $openContentData = $( '.openContent' ).data( 'open-content' );
		let $toggleContentData = $( '.toggleContent[data-toggle-content=' + $openContentData + ']' );
		let $openContentText = $( '.openContentText' );

		$toggleContentData.toggleClass( 'is-open' );
		$openContentText.toggleClass( 'is-open' );
		$openContent.toggleClass( 'is-open' );

		if( $openContentText.hasClass( 'is-open' ) ) {
			$openContentText.html( 'Mostrar menos información' );
		}
		else {
			$openContentText.html( 'Mostrar más información' );
		}

	});