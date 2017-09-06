
( function( $ ) {

	const $DataSelectPolizaSubmit = $('.DataSelectPolizaSubmit');
	console.log('instalar mandato');


	[].slice.call( document.querySelectorAll( 'select.DataSelectPoliza.cs-select' ) ).forEach( (el) => {
		console.log(el, 'element instalar mandato')

	  const options = {
	    onChange : function( val ) {
				if( val == 'allStatePoliza' ) {
					$DataSelectPolizaSubmit.addClass('button-disabled')
				}
				else {
					$DataSelectPolizaSubmit.removeClass('button-disabled')
				}
	      console.log(val, 'value sdnk nsd')
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