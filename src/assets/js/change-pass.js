
	let $toggleChangePass = $( '#toggleChangePass' );
	let $loadingChangePass = $( '#loadingChangePass' );
	let $submitChangePass = $( '#submitChangePass' );
	let $changePassForm = $( '#ChangePassForm' );
	let $successChangePass = $( '#successChangePass' );
	let $changeAgainPass = $( '#changeAgainPass' );



	$changeAgainPass.on("valid.zf.abide", function(ev,el) {
	console.log( 'Change pass' );
	  $submitChangePass.removeClass( 'button-disabled' );
	});

	$changeAgainPass.on("invalid.zf.abide", function(ev,el) {
	  $submitChangePass.addClass( 'button-disabled' );
	});


	$changePassForm.on("submit", ( ev ) => {
		ev.preventDefault();
		$toggleChangePass.addClass( 'hide-xs' );
		$loadingChangePass.removeClass( 'hide-xs' );
		setTimeout( () => {
			$loadingChangePass.addClass( 'hide-xs' );
			$successChangePass.removeClass( 'hide-xs' );
		}, 3000);
	});