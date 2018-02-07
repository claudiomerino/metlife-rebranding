
	let $assignmentFieldValue = $( '.assignmentFieldValue' )

	/*=====  Put all values for the input Assignment  ======*/
	function valuesAssignmentFn() {
		let $assignmentTotal = $( '.assignmentTotal' )

		let $assignmentEmptyArray = []
		let sumAssignment = 0

		$assignmentFieldValue.map( (key, el) => {
			let valueInputAssignment

			if( $(el).val() ) {
				valueInputAssignment = $(el).val()
				$(el).removeClass('is-invalid-input')
				sumAssignment += parseInt( valueInputAssignment )
			}
			else {
				$assignmentEmptyArray.push( 'error' )
				$(el).addClass('is-invalid-input')
			}

		})

		let $assignmentEmpty = $.inArray( 'error', $assignmentEmptyArray )
		let $assignmentTotalText = $('.assignmentTotalText')

		/*=====  All fields assignment has a value or is higher that 0  ======*/
		if( $assignmentEmpty == -1 ) {
			$assignmentTotalText.removeClass('red')
		}
		else {
			$assignmentTotalText.addClass('red')
		}

		console.log( sumAssignment, 'sumAssignment' )

		$assignmentTotal.html( sumAssignment )

	}

	valuesAssignmentFn()


	$assignmentFieldValue.on( 'keydown', (ev) => {
		setTimeout( () => {
			valuesAssignmentFn()
		}, 500)
	})