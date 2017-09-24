
	const $ChangeKeyPhoneCardsSubmit = $('.ChangeKeyPhoneCardsSubmit')
	const $phoneOld = $('#phoneOld')
	const $phoneNew = $('#phoneNew')
	const $phoneConf = $('#phoneConf')
	const $emailChangePhone = $('#emailChangePhone')
	const $ChangePhoneSubmit = $('.ChangePhoneSubmit')
	const $changePhoneHideOnSubmit = $('.changePhoneHideOnSubmit')
	const $changePhoneSuccess = $('.changePhoneSuccess')
	const $cellphoneChangePhone = $('#cellphoneChangePhone')

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

	$cellphoneChangePhone.on('keydown', (e) => {
		setTimeout(() => {
			if($(e.currentTarget).val().length == 9) {
				$(e.currentTarget).siblings('.form-error').removeClass('is-visible')
				$ChangePhoneSubmit.removeClass('button-disabled')
			}
			else {
				$(e.currentTarget).siblings('.form-error').addClass('is-visible')
				$ChangePhoneSubmit.addClass('button-disabled')
			}
		}, 1000)
	})

	$emailChangePhone.on('keydown', (e) => {
		setTimeout(() => {
			const $emailChangePhoneValue = $(e.currentTarget).val()
			validateEmail($emailChangePhoneValue, $(e.currentTarget))
			if($(e.currentTarget).hasClass('is-invalid-input')) {
				$ChangePhoneSubmit.addClass('button-disabled')
			}
			else {
				$ChangePhoneSubmit.removeClass('button-disabled')
			}
		}, 1000)
	})

	$ChangePhoneSubmit.on('click', (e) => {
		if( $(e.currentTarget).hasClass('button-disabled') ) {
			e.preventDefault()
		}
	})

	$ChangeKeyPhoneCardsSubmit.on('click', (e) => {
		if( $(e.currentTarget).hasClass('button-disabled') ) {
			e.preventDefault()
		}
		else {
			$changePhoneHideOnSubmit.addClass('hide-xs')
			$changePhoneSuccess.removeClass('hide-xs')
			switchContent('changePhone')
			setTimeout( () => {
				$('.loadingChangePhone').addClass('hide-xs')
				$('.successChangePhone').removeClass('hide-xs')
				setTimeout( () => {
					window.location.replace('./../datos-cliente/datos-cliente.html#parentHorizontalTab3')
				}, 1000)
			}, 3000)
		}
	})

	let lastPartUrl = document.referrer.substring(document.referrer.lastIndexOf('/') + 1);

	if( lastPartUrl == 'solicitar-codigo-telefonico.html') {
		$('.successChangeCode').removeClass('hide-xs')
	}

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