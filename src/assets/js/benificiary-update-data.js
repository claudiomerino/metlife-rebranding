
setTimeout( () => { 
	$( '.buttonBeneficiaryUpdateData' ).on( 'click', function (ev) {
		$( ev.currentTarget ).closest( 'td.containerDataEdit' ).find( '.beneficiaryUpdateData' ).addClass( 'hide-xs' )
		$( ev.currentTarget ).closest( 'td.containerDataEdit' ).find( '.beneficiaryInitialData' ).addClass( 'hide-xs' )
		$( ev.currentTarget ).closest( 'td.containerDataEdit' ).find( '.clientProfileEdit' ).removeClass( 'hide-state-update' )
		$( ev.currentTarget ).closest( 'td.containerDataEdit' ).find( '.beneficiaryCancelUpdateData' ).removeClass( 'hide-state-update' )
		$( ev.currentTarget ).closest( 'td.containerDataEdit' ).find( '.beneficiarySaveUpdateData' ).removeClass( 'hide-state-update' )
	});
}, 750)

setTimeout( () => {
	$( '.beneficiaryCancelUpdateData' ).on( 'click', function (ev) {
		$( ev.currentTarget ).closest( 'td.containerDataEdit' ).find( '.beneficiaryCancelUpdateData' ).addClass( 'hide-state-update' )
		$( ev.currentTarget ).closest( 'td.containerDataEdit' ).find( '.beneficiarySaveUpdateData' ).addClass( 'hide-state-update' )
		$( ev.currentTarget ).closest( 'td.containerDataEdit' ).find( '.beneficiaryCancelData' ).removeClass( 'hide-xs' )
		$( ev.currentTarget ).closest( 'td.containerDataEdit' ).find( '.beneficiaryInitialData' ).removeClass( 'hide-xs' )
		$( ev.currentTarget ).closest( 'td.containerDataEdit' ).find( '.clientProfileEdit' ).addClass( 'hide-state-update' )
	});
}, 500)

setTimeout( () => {
	$( '.beneficiarySaveUpdateData' ).on( 'click', function (ev) {
		$( ev.currentTarget ).closest( 'td.containerDataEdit' ).find( '.beneficiarySaveUpdateData' ).addClass( 'hide-state-update' )
		$( ev.currentTarget ).closest( 'td.containerDataEdit' ).find( '.beneficiaryCancelUpdateData' ).addClass( 'hide-state-update' )
		$( ev.currentTarget ).closest( 'td.containerDataEdit' ).find( '.beneficiarySaveData' ).removeClass( 'hide-xs' )
		$( ev.currentTarget ).closest( 'td.containerDataEdit' ).find( '.beneficiaryInitialData' ).removeClass( 'hide-xs' )
		$( ev.currentTarget ).closest( 'td.containerDataEdit' ).find( '.clientProfileEdit' ).addClass( 'hide-state-update' )
	});
}, 500)

setTimeout( () => {
	$( '.alert-close' ).on( 'click', function (ev) {
		$( ev.currentTarget ).closest( 'td.containerDataEdit' ).find( '.beneficiaryCancelData' ).addClass( 'hide-xs' )
		$( ev.currentTarget ).closest( 'td.containerDataEdit' ).find( '.beneficiarySaveData' ).addClass( 'hide-xs' )
		$( ev.currentTarget ).closest( 'td.containerDataEdit' ).find( '.beneficiaryUpdateData' ).removeClass( 'hide-xs' )
	});
}, 500)

setTimeout( () => {
	$( '.beneficiaryValidateInput' ).on( 'keydown', function (ev) {
		let findContainerFather = $( ev.currentTarget ).closest( 'td.containerDataEdit' ).find( '.beneficiaryValidateInput' )
		let inputArray = []

		$.each( findContainerFather, ( key, el ) => {
			setTimeout( () => {
				inputArray.push( $(el).val().length );
				console.log( 'Value', $(el).val().length )
			}, 500)
		})

		setTimeout( () => {
			const findValue = $.inArray( 0, inputArray )
			if( findValue == -1 ) {
				console.log('maYOR A 0')
				$( ev.currentTarget ).closest( 'td.containerDataEdit' ).find( '.beneficiarySaveUpdateData' ).removeClass('button-disabled')
				
			}
			else {
				console.log('IGUAL A 0')
				$( ev.currentTarget ).closest( 'td.containerDataEdit' ).find( '.beneficiarySaveUpdateData' ).addClass('button-disabled')
			}
			console.log(inputArray, 'inputArray')
			console.log(findValue, 'findValue')
		}, 500)
			
	});
}, 800)