
( function( $ ) {

	const $DataSelectPolizaSubmit = $('.DataSelectPolizaSubmit');

	[].slice.call( document.querySelectorAll( 'select.DataSelectPoliza.cs-select' ) ).forEach( (el) => {

	  const options = {
	    onChange : function( val ) {

				if( val == 'allStatePoliza' || $('select.DataSelectCard.cs-select').val() == null ) {
					$DataSelectPolizaSubmit.addClass('button-disabled')
				}
				else {
					$DataSelectPolizaSubmit.removeClass('button-disabled')
				}
	    }
	  }
	  new SelectFx(el, options);
	});

	[].slice.call( document.querySelectorAll( 'select.DataSelectCard.cs-select' ) ).forEach( (el) => {

	  const options = {
	    onChange : function( val ) {

				if( val == 'allStatePoliza' || $('select.DataSelectPoliza.cs-select').val() == null ) {
					$DataSelectPolizaSubmit.addClass('button-disabled')
				}
				else {
					$DataSelectPolizaSubmit.removeClass('button-disabled')
				}
	    }
	  }
	  new SelectFx(el, options);
	});

	$DataSelectPolizaSubmit.on('click', (e) => {
		if($(e.currentTarget).hasClass('button-disabled')) {
			e.preventDefault()
		}
	})

}( jQuery ));