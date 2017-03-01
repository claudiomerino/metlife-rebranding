
	let $loginForm = $( '#loginForm' );
	let $loginSubmit = $( '#loginSubmit' );
	let $loginPass = $( '#loginPass' );

	$loginPass.on("valid.zf.abide", function(ev,el) {
	  $loginSubmit.removeClass( 'button-disabled' );
	});

	$loginPass.on("invalid.zf.abide", function(ev,el) {
	  $loginSubmit.addClass( 'button-disabled' );
	});