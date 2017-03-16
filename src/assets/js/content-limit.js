
	let $contentLimit = $( '*[data-limit]' );
	let $numberLimit = $contentLimit.val();

	if( $contentLimit ) {

		$.each( $contentLimit, ( k, v ) => {
			let contentLimitLength = $( v ).text().length;
			if( contentLimitLength > 35 ) {
				let contentText = $( v ).text();
				let $contentSubstring = $( v ).text().substring( 0, 35 );
				let template = `<span data-tooltip aria-haspopup="true" class="has-tip top" data-disable-hover="false" tabindex="2" title="${contentText}">...</span>`;
				$( v ).html( $contentSubstring + template );
			}
		});

	}