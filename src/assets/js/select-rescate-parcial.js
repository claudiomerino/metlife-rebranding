
  [].slice.call( document.querySelectorAll( 'select.RescateParcialSelect.cs-select' ) ).forEach( (el) => {
    const options = {
      onChange : function( val ) {
        if(val == 'payDefault') {
          inactiveSubmitFn()
          $('.RescateParcialSucursal').addClass('hide-xs')
        }

        if(val == 'cheque') {
        	$('.RescateParcialSucursal').removeClass('hide-xs')
        	$('.RescateParcialBanco').add('.RescateParcialTipoCuenta').add('.RescateParcialCuenta').addClass('hide-xs')

          if( $('.InputCurrencySelectBank').val() > 0 && $('select.RescateParcialSucSelect.cs-select').val() != 'sucDefault' ) {
            activeSubmitFn()
          }
          else {
            inactiveSubmitFn()
          }
        }

        if(val == 'valevista') {
        	$('.RescateParcialSucursal').addClass('hide-xs')
        	$('.RescateParcialBanco').add('.RescateParcialTipoCuenta').add('.RescateParcialCuenta').addClass('hide-xs')
          if($('.InputCurrencySelectBank').val() > 0) {
            activeSubmitFn()
          }
          else {
            inactiveSubmitFn()
          }
        }

        if(val == 'deposito') {
          $('.RescateParcialSucursal').addClass('hide-xs')
        	$('.RescateParcialBanco').add('.RescateParcialTipoCuenta').add('.RescateParcialCuenta').removeClass('hide-xs')
        }
      }
    }
    new SelectFx(el, options);
  });

  [].slice.call( document.querySelectorAll( 'select.RescateParcialSucSelect.cs-select' ) ).forEach( (el) => {
    const options = {
      onChange : function( val ) {
        if(val == 'sucDefault') {
        	inactiveSubmitFn()
        }
        else {
        	activeSubmitFn()
          if($('.InputCurrencySelectBank').val() > 0) {
            activeSubmitFn()
          }
          else {
            inactiveSubmitFn()
          }
        }
      }
    }
    new SelectFx(el, options);
  });

  $('.InputCurrencySelectBank').on('keydown', (e) => {
    setTimeout( () => {
      console.log($(e.currentTarget).val(), '$(e.currentTarget).val()')
      console.log($(e.currentTarget).val() == 0, '$(e.currentTarget).val() == 0')

      if($('select.RescateParcialSelect.cs-select').val() == 'cheque') {
        if($('select.RescateParcialSucSelect').val() == 'sucDefault' || $(e.currentTarget).val() == 0) {
          console.log('enra inactive')
          inactiveSubmitFn()
        }
        else {
          console.log('enra active')
          activeSubmitFn()
        }
      }

      if($('select.RescateParcialSelect.cs-select').val() == 'valevista') {
        activeSubmitFn()
      }

      if($('select.RescateParcialSelect.cs-select').val() == 'deposito') {
        activeSubmitFn()
        if($('#ncuenta').val().length > 0) {
          activeSubmitFn()
        }
        else {
          inactiveSubmitFn()
        }
      }

      if($(e.currentTarget).hasClass('is-invalid-input')) {
        $(e.currentTarget).siblings('.form-error').addClass('is-visible')
      }
      else {
        $(e.currentTarget).siblings('.form-error').removeClass('is-visible')
      }

    }, 1000)
  })

  $('#ncuenta').on('keydown', (e) => {
    setTimeout( () => {
      if($(e.currentTarget).val() > 0) {
        activeSubmitFn()

        if($('.InputCurrencySelectBank').val() > 0) {
          activeSubmitFn()
        }
        else {
          inactiveSubmitFn()
        }
      }
      else {
        inactiveSubmitFn()
      }
    }, 1000)
  })

  $('#SolicitarRescateParcialSubmit').on('click', (e) => {
    e.preventDefault()
    if($(e.currentTarget).hasClass('button-disabled') == false) {
      $('#rescate-parcial').foundation('open');
    }
  })

  let $InputCurrencyRescateButton = $('.InputCurrencyRescateButton')

  function activeSubmitFn() {
    console.log('remove button-disabled')
    $InputCurrencyRescateButton.removeClass('button-disabled')
  }

  function inactiveSubmitFn() {
    console.log('add button-disabled')
    $InputCurrencyRescateButton.addClass('button-disabled')
  }