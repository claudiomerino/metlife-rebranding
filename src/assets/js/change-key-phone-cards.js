
	const $ChangeKeyPhoneCardsSubmit = $('.ChangeKeyPhoneCardsSubmit')
	const $phoneOld = $('#phoneOld')
	const $phoneNew = $('#phoneNew')
	const $phoneConf = $('#phoneConf')

	let $phoneNewValue
	let $phoneConfValue

	$phoneOld.on('keydown', (e) => {
		changePhoneCard($phoneOld)
	})

	$phoneNew.on('keydown', (e) => {
		changePhoneCard($phoneNew)
		$phoneNewValue = $phoneNew.val()
		submitPhoneCard()
	})

	$phoneConf.on('keydown', (e) => {
		changePhoneCard($phoneConf)
		$phoneConfValue = $phoneConf.val()
		submitPhoneCard()
	})

	function changePhoneCard(element) {

		setTimeout( (e) => {
			if($(element).val().length > $(element).attr('data-max-number')) {
				$(element).siblings('.form-error').addClass('is-visible')
				$(element).addClass('is-invalid-input')
			}
			else {
				$(element).siblings('.form-error').removeClass('is-visible')
				$(element).removeClass('is-invalid-input')
			}
		}, 1000)

	}

	function submitPhoneCard(value) {

		setTimeout( (e) => {
			if($phoneNewValue == $phoneConfValue) {
				$ChangeKeyPhoneCardsSubmit.removeClass('button-disabled')
			}
			else {
				$phoneConf.siblings('.form-error').addClass('is-visible')
			}
		}, 1000)
	}