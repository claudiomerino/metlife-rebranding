
	let $openContent = $( '.openContent' );
	let $toggleContent = $( '.toggleContent' ).data( 'toggle-content' );

	$openContent.on( 'click', ( e ) => {
		e.preventDefault();
		e.stopPropagation();


		let $openContentData = $( e.currentTarget ).data( 'open-content' );
		let $toggleContentData = $( '.toggleContent[data-toggle-content=' + $openContentData + ']' );
		let $openContentText = $( e.currentTarget ).find( 'span' );

		$toggleContentData.toggleClass( 'is-open' );
		$openContentText.toggleClass( 'is-open' );
		$( e.currentTarget ).toggleClass( 'is-open' );

		if( $openContentText.hasClass( 'is-open' ) ) {
			$openContentText.html( 'Mostrar menos información' );
		}
		else {
			$openContentText.html( 'Mostrar más información' );
		}

	});
