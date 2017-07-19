
	let $openContent = $( '.openContent' );
	let $toggleContent = $( '.toggleContent' ).data( 'toggle-content' );
	let $restText = $( '.openContentText' ).data( 'rest-text' );
	let $openText = $( '.openContentText' ).data( 'open-text' );

	$openContent.on( 'click', ( e ) => {
		e.preventDefault();



		let $openContentData = $( e.currentTarget ).data( 'open-content' );
		let $toggleContentData = $( '.toggleContent[data-toggle-content=' + $openContentData + ']' );
		let $openContentText = $( e.currentTarget ).find( 'span' );
		let $dataClose = $( e.currentTarget ).find( 'span' ).data( 'close' );

		$toggleContentData.toggleClass( 'is-open' );
		$openContentText.toggleClass( 'is-open' );
		$( e.currentTarget ).toggleClass( 'is-open' );

		if( $dataClose ) {

			if( !$openContentText.hasClass( 'is-open' ) ) {
				$openContentText.html( $restText );
			}
			else {
				$openContentText.html( $openText );
			}

		}

		else {

			if( $openContentText.hasClass( 'is-open' ) ) {
				$openContentText.html( $restText );
			}
			else {
				$openContentText.html( $openText );
			}

		}

	});


