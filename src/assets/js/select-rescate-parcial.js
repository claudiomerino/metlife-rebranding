
  [].slice.call( document.querySelectorAll( 'select.RescateParcialSelect.cs-select' ) ).forEach( (el) => {
    const options = {
      onChange : function( val ) {
        if(val == 'payDefault') {
          $('.InputCurrencyRescateButton').addClass('button-disabled')
          $('.RescateParcialSucursal').addClass('hide-xs')
        }

        if(val == 'cheque') {
        	$('.RescateParcialSucursal').removeClass('hide-xs')
        	$('.RescateParcialBanco').add('.RescateParcialTipoCuenta').add('.RescateParcialCuenta').addClass('hide-xs')
          if( $('.InputCurrencySelectBank').val() ) {
            $('.InputCurrencyRescateButton').removeClass('button-disabled')
          }
          else {
            $('.InputCurrencyRescateButton').addClass('button-disabled')
          }

          if($('select.RescateParcialSucSelect.cs-select').val() == 'sucDefault') {
            $('.InputCurrencyRescateButton').addClass('button-disabled')
          }
          else {
            $('.InputCurrencyRescateButton').removeClass('button-disabled')
          }
        }

        if(val == 'valevista') {
        	$('.RescateParcialSucursal').addClass('hide-xs')
        	$('.RescateParcialBanco').add('.RescateParcialTipoCuenta').add('.RescateParcialCuenta').addClass('hide-xs')
          if($('.InputCurrencySelectBank').val()) {
            $('.InputCurrencyRescateButton').removeClass('button-disabled')
          }
          else {
            $('.InputCurrencyRescateButton').addClass('button-disabled')
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
        	$('.InputCurrencyRescateButton').addClass('button-disabled')
        }
        else {
        	$('.InputCurrencyRescateButton').removeClass('button-disabled')
          if($('.InputCurrencySelectBank').val()) {
            $('.InputCurrencyRescateButton').removeClass('button-disabled')
          }
          else {
            $('.InputCurrencyRescateButton').addClass('button-disabled')
          }
        }
      }
    }
    new SelectFx(el, options);
  });

  $('.InputCurrencySelectBank').on('keydown', (e) => {
    setTimeout( () => {
      if($('select.RescateParcialSucSelect').val() == 'sucDefault') {
        $('.InputCurrencyRescateButton').addClass('button-disabled')
      }
      else {
        $('.InputCurrencyRescateButton').removeClass('button-disabled')
      }

      if($('select.RescateParcialSelect.cs-select').val() == 'valevista') {
        $('.InputCurrencyRescateButton').removeClass('button-disabled')
      }

      if($('select.RescateParcialSelect.cs-select').val() == 'deposito') {
        $('.InputCurrencyRescateButton').removeClass('button-disabled')
      }

      if($(e.currentTarget).hasClass('is-invalid-input')) {
        $(e.currentTarget).siblings('.form-error').addClass('is-visible')
        $('.InputCurrencyRescateButton').addClass('button-disabled')
      }
      else {
        $(e.currentTarget).siblings('.form-error').removeClass('is-visible')
        $('.InputCurrencyRescateButton').removeClass('button-disabled')

        if($('#ncuenta').val().length > 0) {
          $('.InputCurrencyRescateButton').removeClass('button-disabled')
        }
        else {
          $('.InputCurrencyRescateButton').addClass('button-disabled')
        }
      }

    }, 1000)

  })

  $('#ncuenta').on('keydown', (e) => {
    setTimeout( () => {
      if($(e.currentTarget).val().length > 0) {
        $('.InputCurrencyRescateButton').removeClass('button-disabled')

        if($('.InputCurrencySelectBank').val().length > 0) {
          $('.InputCurrencyRescateButton').removeClass('button-disabled')
        }
        else {
          $('.InputCurrencyRescateButton').addClass('button-disabled')
        }
      }
      else {
        $('.InputCurrencyRescateButton').addClass('button-disabled')
      }
    }, 1000)
  })

  $('#SolicitarRescateParcialSubmit').on('click', (e) => {
    e.preventDefault()
    console.log('entra')
    console.log($(e.currentTarget).hasClass('button-disabled'), 'button-disabled')
    if($(e.currentTarget).hasClass('button-disabled') == false) {
      $('#rescate-parcial').foundation('open');
    }
  })