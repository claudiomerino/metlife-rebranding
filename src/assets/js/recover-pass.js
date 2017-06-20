
	let $toggleMainLoading = $( '.toggleMainLoading' );
	let $loadingMessage = $( '.loadingMessage' );
	let $loadingForm = $( '.loadingForm' );
	let $loadingSuccess = $( '.loadingSuccess' );
	let $errorLoading = $( '.errorLoading' );

	$loadingForm.on("submit", ( ev ) => {
		ev.preventDefault();
		$toggleMainLoading.addClass( 'hide-xs' );
		$loadingMessage.removeClass( 'hide-xs' );
		setTimeout( () => {
			$loadingMessage.addClass( 'hide-xs' );
			$loadingSuccess.removeClass( 'hide-xs' );
			$errorLoading.removeClass( 'hide-xs' );
		}, 3000);
	});