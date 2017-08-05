
	let $Bounty = $( '.Bounty' );
	let $Total = $( '.Total' );
	let $BountyValueUF = $('.BountyValueUF')
	
 	console.log($Bounty)

 		$($Bounty).on('change', (ev) => {

 			if( $(ev.currentTarget).is(':checked') ) {
		 		$(ev.currentTarget).parent().next().children().attr('disabled', false)
	 			let sumTotal = 0;

			 	$Total.each( (index, data) => {
			 		const $BountyValue = $('body').find( '.BountyValue-' + index )
			 		if( $BountyValue.is(':checked') ) {
			 			sumTotal += parseInt( $( data ).text() )
			 		}	 	
			 	})

			 	$BountyValueUF.text(sumTotal)
				console.log('sumTotal', sumTotal)		 	
 			}

 			else {
 				$(ev.currentTarget).parent().nextAll().children().attr('disabled', true)
 				$(ev.currentTarget).parent().nextAll().children().attr('checked', false)
 			}

 		})

 	$Bounty.each( (index, data) => {

 		if(index === 0 ) {
 			$(data).attr('disabled', false)
 		}

 		$(data).addClass('BountyValue-' + index)

 	})