
	// Variables Change-key-access-cards

	let $toggleChangePass = $( '.toggleChangePass' );
	let $loadingChangePass = $( '.loadingChangePass' );
	let $changePassForm = $( '.ChangePassForm' );
	let $successChangePass = $( '.successChangePass' );
	let $changeNewPass = $( '.changeNewPass input' );
	let $changeNewPassParent = $( '.changeNewPass' );

	let $errorLength = $( '.errorLength' );
	let $errorAZ = $( '.errorAZ' );
	let $errorNumbers = $( '.errorNumbers' );



	// Change New Pass
	$changeNewPass.on("valid.zf.abide", function(ev,el) {
		$(el).closest($changeNewPassParent).find($errorLength).removeClass( 'pink' );
		$(el).closest($changeNewPassParent).find($errorLength).addClass( 'green' );
	});

	$changeNewPass.on("invalid.zf.abide", function(ev,el) {
		$(el).closest($changeNewPassParent).find($errorLength).removeClass( 'green' );
		$(el).closest($changeNewPassParent).find($errorLength).addClass( 'pink' );
	});

	// Change Pass Form
	$changePassForm.on("submit", ( ev ) => {

		ev.preventDefault();
		$(ev.currentTarget).find($toggleChangePass).addClass( 'hide-xs' );
		$(ev.currentTarget).find($loadingChangePass).removeClass( 'hide-xs' );
		setTimeout( () => {
			$(ev.currentTarget).find($loadingChangePass).addClass( 'hide-xs' );
			$(ev.currentTarget).find($successChangePass).removeClass( 'hide-xs' );
		}, 3000);

	});


	Foundation.Abide.defaults.patterns['length'] = /^(.){8,}$/;

	Foundation.Abide.defaults.validators['letters_only'] = ( $el, required, parent ) => {

		let letterValue = $el.val();
		let letterPattern = new RegExp(/[a-zA-Z]/);

		if( letterPattern.test( letterValue ) ) {
			$el.closest($changeNewPassParent).find($errorAZ).addClass( 'green' );
			$el.closest($changeNewPassParent).find($errorAZ).removeClass( 'pink' );
		}
		else {
			$el.closest($changeNewPassParent).find($errorAZ).addClass( 'pink' );
			$el.closest($changeNewPassParent).find($errorAZ).removeClass( 'green' );
		}

	};

	Foundation.Abide.defaults.validators['numbers_only'] = ( $el, required, parent ) => {

		let numbersValue = $el.val();
		let numbersPattern = new RegExp(/[0-9]/);

		if( numbersPattern.test( numbersValue ) ) {
			$el.closest($changeNewPassParent).find($errorNumbers).addClass( 'green' );
			$el.closest($changeNewPassParent).find($errorNumbers).removeClass( 'pink' );
		}
		else {
			$el.closest($changeNewPassParent).find($errorNumbers).addClass( 'pink' );
			$el.closest($changeNewPassParent).find($errorNumbers).removeClass( 'green' );
		}

	};