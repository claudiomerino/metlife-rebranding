
	const $ChangeKeyPhoneCardsSubmit = $('.ChangeKeyPhoneCardsSubmit')
	const $phoneOld = $('#phoneOld')
	const $phoneNew = $('#phoneNew')
	const $phoneConf = $('#phoneConf')
	const $emailChangePhone = $('#emailChangePhone')
	const $ChangePhoneSubmit = $('.ChangePhoneSubmit')

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

	$emailChangePhone.on('keydown', (e) => {
		setTimeout(() => {
			const $emailChangePhoneValue = $(e.currentTarget).val()
			validateEmail($emailChangePhoneValue, $(e.currentTarget))
		}, 1000)
	})

	$ChangeKeyPhoneCardsSubmit.on('click', (e) => {
		if( $(e.currentTarget).hasClass('button-disabled') ) {
			e.preventDefault()
		}
	})

	$ChangePhoneSubmit.on('click', (e) => {
		e.preventDefault()
		switchContent('changePhone')
		setTimeout( () => {
			$('.loadingChangePhone').addClass('hide-xs')
			$('.successChangePhone').removeClass('hide-xs')
			setTimeout( () => {
				window.location.replace('./../datos-cliente/datos-cliente.html#parentHorizontalTab3')
			}, 1000)
		}, 3000)
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