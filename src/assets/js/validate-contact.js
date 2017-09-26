
  let $validateEmail = $('.validateEmail')
  let $validateEmpty = $('.validateEmpty')
  let $validateEmptyTextArea = $('.validateEmptyTextArea')
  let $SendContact = $('.SendContact')

  $validateEmail.on('keydown', (e) => {
    validateEmail($(e.currentTarget).val(), $(e.currentTarget))
  	setTimeout( () => {
	    if($(e.currentTarget).hasClass('is-invalid-input')) {
		    inactiveSubmitButtonFn($SendContact)
	    }
	    else {
		    activeSubmitButtonFn($SendContact)
	    }
  	}, 1000)
  })

  $validateEmptyTextArea.on('keydown', (e) => {
  	setTimeout( () => {
	    if($(e.currentTarget).val()) {
	    	$(e.currentTarget).removeClass('is-invalid-input')
	    	$(e.currentTarget).siblings('.form-error').removeClass('is-visible')
		    activeSubmitButtonFn($SendContact)
	    }
	    else {
	    	$(e.currentTarget).addClass('is-invalid-input')
	    	$(e.currentTarget).siblings('.form-error').addClass('is-visible')
		    inactiveSubmitButtonFn($SendContact)
	    }
  	}, 1000)
  })

  $validateEmpty.on('keydown', (e) => {
  	setTimeout( () => {
  		if($(e.currentTarget).val().length > 0) {
	    	$(e.currentTarget).removeClass('is-invalid-input')
	    	$(e.currentTarget).siblings('.form-error').removeClass('is-visible')
	    	activeSubmitButtonFn($SendContact)
	  	}
	  	else {
	  		$(e.currentTarget).addClass('is-invalid-input')
	  		$(e.currentTarget).siblings('.form-error').addClass('is-visible')
	    	inactiveSubmitButtonFn($SendContact)
	  	}
  	}, 1000)
  });

  [].slice.call( document.querySelectorAll( 'select.SelectContact.cs-select' ) ).forEach( (el) => {
    const options = {
      onChange : function( val ) {
      	if(val == 'default') {
	    		inactiveSubmitButtonFn($SendContact)
      	}
      	else {
	    		activeSubmitButtonFn($SendContact)
      	}
      }
    }
    new SelectFx(el, options);
  });

  function activeSubmitButtonFn(button) {
  	if(!$validateEmail.hasClass('is-invalid-input') && $validateEmptyTextArea.val().length > 0 && $validateEmpty.val().length > 0 && $('select.SelectContact.cs-select').val() != null) {
    	$(button).removeClass('button-disabled')
    }
  }


  function inactiveSubmitButtonFn(button) {
  	if($validateEmail.hasClass('is-invalid-input') || $validateEmptyTextArea.val().length <= 0 || $validateEmpty.val().length <= 0 || $('select.SelectContact.cs-select').val() == null) {
    	$(button).addClass('button-disabled')
    }
  }

  $SendContact.on('click', (e) => {
    e.preventDefault()
    if($(e.currentTarget).hasClass('button-disabled')) {
      $('.ClientProfileMessageSuccess').addClass('hide-state-update')
    }
    else {
      $(e.currentTarget).closest('.FormContact').find('.input__field').prop('disabled', 'disabled')
      $(e.currentTarget).closest('.FormContact').find('.SelectContact').addClass('disabledSelect')
      $('.ClientProfileMessageSuccess').removeClass('hide-state-update')
    }
  })