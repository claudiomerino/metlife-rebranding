
	$( document ).foundation();

  $( document ).ready( function(e) {
  	inputFilled();

  	$('.accordion-title').on('click', (e) => {
  		console.log('click', e)
  		window.location.hash = '';
  		e.preventDefault()
  		e.stopPropagation()
  	})
	});
