
	let $toggleChangePass = $( '#toggleChangePass' );
	let $loadingChangePass = $( '#loadingChangePass' );
	let $submitChangePass = $( '#submitChangePass' );
	let $changePassForm = $( '#ChangePassForm' );
	let $successChangePass = $( '#successChangePass' );
	let $changeAgainPass = $( '#changeAgainPass' );
	let $changeNewPass = $( '#changeNewPass' );

	let $errorLength = $( '#errorLength' );
	let $errorAZ = $( '#errorAZ' );
	let $errorNumbers = $( '#errorNumbers' );


	// Change New Pass
	$changeNewPass.on("valid.zf.abide", function(ev,el) {
		$errorLength.removeClass( 'pink' );
		$errorLength.addClass( 'green' );
	});

	$changeNewPass.on("invalid.zf.abide", function(ev,el) {
		$errorLength.removeClass( 'green' );
		$errorLength.addClass( 'pink' );
	});


	// Change Pass Form
	$changePassForm.on("submit", ( ev ) => {
		ev.preventDefault();
		$toggleChangePass.addClass( 'hide-xs' );
		$loadingChangePass.removeClass( 'hide-xs' );
		setTimeout( () => {
			$loadingChangePass.addClass( 'hide-xs' );
			$successChangePass.removeClass( 'hide-xs' );
		}, 3000);
	});


	Foundation.Abide.defaults.patterns['length'] = /^(.){8,}$/;

	Foundation.Abide.defaults.validators['letters_only'] = ( $el, required, parent ) => {

		let letterValue = $el.val();
		let letterPattern = new RegExp(/[a-zA-Z]/);

		if( letterPattern.test( letterValue ) ) {
			$errorAZ.addClass( 'green' );
			$errorAZ.removeClass( 'pink' );
		}
		else {
			$errorAZ.addClass( 'pink' );
			$errorAZ.removeClass( 'green' );
		}

	};

	Foundation.Abide.defaults.validators['numbers_only'] = ( $el, required, parent ) => {

		let numbersValue = $el.val();
		let numbersPattern = new RegExp(/[0-9]/);

		if( numbersPattern.test( numbersValue ) ) {
			$errorNumbers.addClass( 'green' );
			$errorNumbers.removeClass( 'pink' );
		}
		else {
			$errorNumbers.addClass( 'pink' );
			$errorNumbers.removeClass( 'green' );
		}

	};