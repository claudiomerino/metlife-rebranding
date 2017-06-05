
  function inputFilled() {
      var inputField = $('.input--ichiro .input__field')
      if( inputField.val() ) {
          inputField.filter( function() {
              return $(this).val();
          }).parent().addClass('input--filled');
      }

  }