

	/*=====  Put all values for the input Assignment  ======*/
	function valuesAssignmentFn() {
		console.log('delete executed')
		let $assignmentFieldValue = $( '.assignmentFieldValue' )
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

		/*=====  All fields assignment not has a value with error. If is -1 not find any error  ======*/
		if( $assignmentEmpty == -1 ) {
			$assignmentTotalText.removeClass('red')

			/*=====  If Sum total is equal to 100  ======*/
			if( sumAssignment == 100 ) {
				$assignmentTotalText.removeClass('red')
			}
			else {
				$assignmentTotalText.addClass('red')
			}

		}
		else {
			$assignmentTotalText.addClass('red')
		}

		console.log( sumAssignment, 'sumAssignment' )

		$assignmentTotal.html( sumAssignment )

	}

	valuesAssignmentFn()


	$('body').on( 'keyup mouseup', '.assignmentFieldValue', (ev) => {
		setTimeout( () => {
			valuesAssignmentFn()
		}, 500)
	})