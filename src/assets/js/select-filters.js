(function() {
	const $filterSelect = $('.filterDataDesc');

	[].slice.call( document.querySelectorAll( 'select.cs-select' ) ).forEach( function(el) {

		const options = {
			onChange : function( val ) {
				$filterSelect.each( (index, elDesc) => {
					if( $dataFilterDesc == val ) {
						$($(elDesc).closest('tr')[0]).removeClass('hide-filter-data-desc')
					}
					else {
						$($(elDesc).closest('tr')[0]).addClass('hide-filter-data-desc')
					}
				})
			}
		}
		new SelectFx(el, options);
	} );
})();