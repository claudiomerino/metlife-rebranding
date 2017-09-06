
( function( $ ) {

	const $DataSelectPolizaSubmit = $('.DataSelectPolizaSubmit');

	[].slice.call( document.querySelectorAll( 'select.DataSelectPoliza.cs-select' ) ).forEach( (el) => {

	  const options = {
	    onChange : function( val ) {
				if( val == 'allStatePoliza' ) {
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