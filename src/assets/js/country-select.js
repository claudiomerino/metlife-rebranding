
  [].slice.call( document.querySelectorAll( 'select.CountrySelect.cs-select' ) ).forEach( (el) => {
    const options = {
      onChange : function( val ) {
        $(el).closest('.ChangeCountrySelectWrap').find('.ChangeContryPhone').intlTelInput("setCountry", val)
        $(el).closest('.ChangeCountrySelectWrap').find('.ChangeContryCellPhone').intlTelInput("setCountry", val)

        if(val == 'CL') {
          $(el).closest('.ChangeCountrySelectWrap').find('.CountrySelectModifier').removeClass('hide-xs')
          //$CountrySelectModifier.removeClass('hide-xs')
        }
        else {
          $(el).closest('.ChangeCountrySelectWrap').find('.CountrySelectModifier').addClass('hide-xs')
          //$CountrySelectModifier.addClass('hide-xs')
        }
      }
    }
    new SelectFx(el, options);
  });