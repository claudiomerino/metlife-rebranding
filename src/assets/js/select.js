

	[].slice.call( document.querySelectorAll( 'select.GeneralSelect.cs-select' ) ).forEach( (el) => {
	  new SelectFx(el);
	});

  function GeneralSelectNewFn (generalEl) {
  	setTimeout( () => {
	  	[].slice.call( document.querySelectorAll( `select.${generalEl}.cs-select` ) ).forEach( (el) => {
	  	  new SelectFx(el);
	  	});
  	}, 700 )
  }