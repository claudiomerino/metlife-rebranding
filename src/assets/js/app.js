
	$( document ).foundation();

  $( document ).ready( function(e) {
      inputFilled();
			var actualSize = Foundation.MediaQuery.current

			console.log(actualSize, 'actualSize')

		  let elem
			let $testToggle = $('.testToggle');

			$testToggle.on( 'click', ( e ) => {
				e.preventDefault();
				$testToggle.toggleClass( 'test' );
				console.log('First');
			})

  });
