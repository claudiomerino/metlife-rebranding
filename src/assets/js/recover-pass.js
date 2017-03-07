
	let $toggleRecoverPass = $( '#toggleRecoverPass' );
	let $loadingRecoverPass = $( '#loadingRecoverPass' );
	let $submitRecoverPass = $( '#submitRecoverPass' );
	let $recoverPassForm = $( '#recoverPassForm' );
	let $successRecoverPass = $( '#successRecoverPass' );
	let $errorRecoverPass = $( '#errorRecoverPass' );
	let $recoverRut = $( '#recoverRut' );

	$recoverPassForm.on("submit", ( ev ) => {
		ev.preventDefault();
		$toggleRecoverPass.addClass( 'hide-xs' );
		$loadingRecoverPass.removeClass( 'hide-xs' );
		setTimeout( () => {
			$loadingRecoverPass.addClass( 'hide-xs' );
			$successRecoverPass.removeClass( 'hide-xs' );
			$errorRecoverPass.removeClass( 'hide-xs' );
		}, 3000);
	});