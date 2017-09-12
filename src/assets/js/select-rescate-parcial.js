
  [].slice.call( document.querySelectorAll( 'select.RescateParcialSelect.cs-select' ) ).forEach( (el) => {
    const options = {
      onChange : function( val ) {
        if(val == 'cheque') {
        	$('.RescateParcialSucursal').removeClass('hide-xs')
        	$('.RescateParcialBanco').add('.RescateParcialTipoCuenta').add('.RescateParcialCuenta').addClass('hide-xs')
        }

        if(val == 'valevista') {
        	$('.RescateParcialSucursal').addClass('hide-xs')
        	$('.RescateParcialBanco').add('.RescateParcialTipoCuenta').add('.RescateParcialCuenta').addClass('hide-xs')
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
        	$('.InputCurrencyButton').addClass('button-disabled')
        }
        else {
        	$('.InputCurrencyButton').removeClass('button-disabled')
        }
      }
    }
    new SelectFx(el, options);
  });

  $('.InputCurrencySelectBank').on('keydown', (e) => {
    setTimeout( () => {
      if($('select.RescateParcialSucSelect').val() == 'sucDefault') {
        $('.InputCurrencyButton').addClass('button-disabled')
      }
      else {
        $('.InputCurrencyButton').removeClass('button-disabled')
      }
    }, 1000)

  })