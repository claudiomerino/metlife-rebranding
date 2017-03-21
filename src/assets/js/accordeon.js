
	$( "#tabs" ).on( "up.zf.accordion", function( event ) {
		setTimeout(function(){
			$( 'html,body' ).animate(
				{
					scrollTop: $('.is-active').offset().top - 90
				}
			, 'slow');
		}, 250);
	});