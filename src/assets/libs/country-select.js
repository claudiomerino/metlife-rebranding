  (function( $ ) {

    let $CountrySelectModifier = $('.CountrySelectModifier')
    let $phone = $('#phone')
    let $cellPhone = $('#cellPhone');

    [].slice.call( document.querySelectorAll( 'select.CountrySelect.cs-select' ) ).forEach( (el) => {
      const options = {
        onChange : function( val ) {
          $phone.intlTelInput("setCountry", val)
          $cellPhone.intlTelInput("setCountry", val)

          if(val == 'CL') {
            $CountrySelectModifier.removeClass('hide-xs')
          }
          else {
            $CountrySelectModifier.addClass('hide-xs')
          }
          console.log(val, 'val')
        }
      }
      new SelectFx(el, options);
    });

  }( jQuery ));