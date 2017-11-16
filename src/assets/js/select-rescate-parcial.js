
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

          const normalValue = parseInt($('.InputCurrencySelectBank').attr('normal-value'))
          const max = parseInt( $('.InputCurrencySelectBank').attr('max') )
          const min = parseInt( $('.InputCurrencySelectBank').attr('min') )
          if( normalValue >= min && normalValue <= max && $('select.RescateParcialSucSelect.cs-select').val() != null ) {
            activeSubmitFn()
          }
          else {
            inactiveSubmitFn()
          }
        }

        if(val == 'valevista') {
        	$('.RescateParcialSucursal').addClass('hide-xs')
        	$('.RescateParcialBanco').add('.RescateParcialTipoCuenta').add('.RescateParcialCuenta').addClass('hide-xs')
          const normalValue = parseInt($('.InputCurrencySelectBank').attr('normal-value'))
          const max = parseInt( $('.InputCurrencySelectBank').attr('max') )
          const min = parseInt( $('.InputCurrencySelectBank').attr('min') )
          if(normalValue >= min && normalValue <= max) {
            activeSubmitFn()
          }
          else {
            inactiveSubmitFn()
          }

        }

        if(val == 'deposito') {
          $('.RescateParcialSucursal').addClass('hide-xs')
        	$('.RescateParcialBanco').add('.RescateParcialTipoCuenta').add('.RescateParcialCuenta').removeClass('hide-xs')

          const normalValue = parseInt($('.InputCurrencySelectBank').attr('normal-value'))
          const max = parseInt( $('.InputCurrencySelectBank').attr('max') )
          const min = parseInt( $('.InputCurrencySelectBank').attr('min') )
          if($('#ncuenta').val().length > 0 && normalValue >= min && normalValue <= max) {
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

  [].slice.call( document.querySelectorAll( 'select.RescateParcialSucSelect.cs-select' ) ).forEach( (el) => {
    const options = {
      onChange : function( val ) {
        if(val == 'sucDefault') {
        	inactiveSubmitFn()
        }
        else {
          if($('.InputCurrencySelectBank').val() == 0) {
            inactiveSubmitFn()
          }
          else {
            activeSubmitFn()
          }
        }
      }
    }
    new SelectFx(el, options);
  });

  $('.InputCurrencySelectBank').on('keydown', (e) => {
    setTimeout( () => {

      if($('select.RescateParcialSelect.cs-select').val() == 'cheque') {
        if($('select.RescateParcialSucSelect').val() == null) {
          inactiveSubmitFn()
        }
        else {
          if($(e.currentTarget).val() == 0) {
            inactiveSubmitFn()
          }
          else {

            const normalValue = parseInt($('.InputCurrencySelectBank').attr('normal-value'))
            const min = parseInt( $('.InputCurrencySelectBank').attr('min') )
            const max = parseInt( $('.InputCurrencySelectBank').attr('max') )

            if(normalValue >= min && normalValue <= max) {
              $('.InputCurrencySelectBank').removeClass('is-invalid-input')
              activeSubmitFn()

            } else {

              $('.InputCurrencySelectBank').addClass('is-invalid-input')
              inactiveSubmitFn()

            }
          }
        }
      }

      if($('select.RescateParcialSelect.cs-select').val() == 'valevista') {
        if($(e.currentTarget).val() == 0) {
          inactiveSubmitFn()
        }
        else {
          const normalValue = parseInt($('.InputCurrencySelectBank').attr('normal-value'))
          const min = parseInt( $('.InputCurrencySelectBank').attr('min') )
          const max = parseInt( $('.InputCurrencySelectBank').attr('max') )

          if(normalValue >= min && normalValue <= max) {
            $('.InputCurrencySelectBank').removeClass('is-invalid-input')
            activeSubmitFn()

          } else {

            $('.InputCurrencySelectBank').addClass('is-invalid-input')
            inactiveSubmitFn()

          }
        }
      }

      if($('select.RescateParcialSelect.cs-select').val() == 'deposito') {
        if($('#ncuenta').val().length > 0 && $(e.currentTarget).val() > 0) {
          activeSubmitFn()
        }
        else {
          const normalValue = parseInt($('.InputCurrencySelectBank').attr('normal-value'))
          const min = parseInt( $('.InputCurrencySelectBank').attr('min') )
          const max = parseInt( $('.InputCurrencySelectBank').attr('max') )

          if(normalValue >= min && normalValue <= max) {
            $('.InputCurrencySelectBank').removeClass('is-invalid-input')
            activeSubmitFn()

          } else {

            $('.InputCurrencySelectBank').addClass('is-invalid-input')
            inactiveSubmitFn()

          }
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
        const max = parseInt( $('.InputCurrencySelectBank').attr('max') )
        const min = parseInt( $('.InputCurrencySelectBank').attr('min') )
        const normalValue = parseInt($('.InputCurrencySelectBank').attr('normal-value'))

        if(normalValue >= min && normalValue <= max) {
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
    $InputCurrencyRescateButton.removeClass('button-disabled')
  }

  function inactiveSubmitFn() {
    $InputCurrencyRescateButton.addClass('button-disabled')
  }