
	function switchContent(match) {
		$(`[data-toggle-match="${match}"]`).attr('data-switch', (i, val) => {
			return val === 'show' ? 'hide' : 'show'
		})
	}

  $('#emailFriend').on('keydown', (e) => {
    if( $(e.currentTarget).hasClass('is-invalid-input') ) {
      $('#sendFriend').addClass('button-disabled')
    }
    else {
      $('#sendFriend').removeClass('button-disabled')
    }
  })

  $('#sendFriend').on('click', (e) => {
    e.preventDefault()
  })

  $('.ShowPayStep3').on('click', (e) => {
    e.preventDefault()
    switchContent('PayButtonStep3')
  })

  const $SendSMS = $('.SendSMS')

  $SendSMS.on('click', (e) => {
    e.preventDefault()
    switchContent('SendSMSWrap')
  })

  const $SendSMSCancel = $('.SendSMSCancel')

  $SendSMSCancel.on('click', (e) => {
    e.preventDefault()
    switchContent('SendSMSWrap')
  })

  $('.smsCode').on( 'keydown', (e) => {
    setTimeout( () => {
      if( $(e.currentTarget).val().length == 0 ) {
        $('.buttonContinue').addClass('button-disabled')
        $('.smsCode').addClass('smsCodeInvalid')
      }
      else {
        $('.buttonContinue').removeClass('button-disabled')
        $('.smsCode').removeClass('smsCodeInvalid')
      }
    }, 250)
  })



  $('.updateChangeSave').on( 'click', (e) => {

      $('.smsCodeConfirmation').removeClass('hide-xs')
      $('.updateDataRefund').addClass('hide-xs')

  })


  $('.codeConfirmationContinue').on( 'click', (e) => {
    $('.changeAccountData').removeClass('hide-xs');
    if( !$('.codeConfirmationContinue').hasClass('button-disabled') ) {
      $('.smsCodeConfirmation').addClass('hide-xs')
      $('.codeConfirmationSuccess').removeClass('hide-xs')
    }
  })




