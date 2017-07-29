(function() {
	const $filterSelect = $('.filterDataDesc');

	[].slice.call( document.querySelectorAll( 'select.cs-select' ) ).forEach( function(el) {

		const options = {
			onChange : function( val ) {
				console.log(val, 'val')
				$filterSelect.each( (index, elDesc) => {
					console.log($(elDesc).data('filter-data-desc'), 'elDesc')
					const $dataFilterDesc = $(elDesc).data('filter-data-desc')
					if(val == 'allStateDividend') {
						$($(elDesc).closest('tr')[0]).removeClass('hide-filter-data-desc')
					}
					else {
						if( $dataFilterDesc == val ) {
							$($(elDesc).closest('tr')[0]).removeClass('hide-filter-data-desc')
						}
						else {
							$($(elDesc).closest('tr')[0]).addClass('hide-filter-data-desc')
						}
					}
				})
			}
		}
		new SelectFx(el, options);
	} );
})();