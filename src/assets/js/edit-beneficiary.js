
$( '.deleteBeneficiary' ).on( 'click', (ev) => {
	ev.preventDefault();
	$( ev.currentTarget ).closest('.tagBeneficiary').remove();
});