
	let $toggleRecoverPass = $( '#toggleRecoverPass' );
	let $loadingRecoverPass = $( '#loadingRecoverPass' );
	let $submitRecoverPass = $( '#submitRecoverPass' );
	let $recoverPassForm = $( '#recoverPassForm' );
	let $successRecoverPass = $( '#successRecoverPass' );
	let $errorRecoverPass = $( '#errorRecoverPass' );
	let $recoverRut = $( '#recoverRut' );


	$recoverRut.on("valid.zf.abide", function(ev,el) {
	  $submitRecoverPass.removeClass( 'button-disabled' );
	});

	$recoverRut.on("invalid.zf.abide", function(ev,el) {
	  $submitRecoverPass.addClass( 'button-disabled' );
	});


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