
	let $contentLimit = $( '*[data-limit]' );

	if( $contentLimit ) {

		$.each( $contentLimit, ( k, v ) => {
			let $numberLimit = $( v ).data( 'limit' );

			let contentLimitLength = $( v ).text().length;
			if( contentLimitLength > $numberLimit ) {
				let contentText = $( v ).text();
				let $contentSubstring = $( v ).text().substring( 0, $numberLimit );
				let template = `<span data-tooltip aria-haspopup="true" class="has-tip top" data-disable-hover="false" tabindex="2" title="${contentText}">...</span>`;
				$( v ).html( $contentSubstring + template );
			}
		});

	}