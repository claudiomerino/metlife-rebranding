
	$( document ).foundation();

  $( document ).ready( function(e) {
      inputFilled();
			var actualSize = Foundation.MediaQuery.current

			console.log(actualSize, 'actualSize')

		  let elem
			let $testToggle = $('.testToggle');

			function testToglefn() {
				console.log(' se llama')

				$testToggle.on( 'click', ( e ) => {
					e.preventDefault();
					$testToggle.toggleClass( 'test' );
					console.log('First');
				})
			}

			testToglefn();

			if(actualSize === 'medium' || actualSize === 'small') {

		  let element = $('#sampletabs')
					new Foundation.ResponsiveAccordionTabs(element);
					console.log('medium or small')
			}

		$(window).on('changed.zf.mediaquery', function(event, newSize, oldSize) {

			console.log(event, newSize)
			if( newSize === 'medium' || newSize === 'small' ) {
				testToglefn();
			}

				console.log('se ejecuto segunda vez')
		  // newSize is the name of the now-current breakpoint, oldSize is the previous breakpoint
		});
  });
