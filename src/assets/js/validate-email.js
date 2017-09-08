
	function validateEmail(emailAddress, element) {
    var pattern = new RegExp(/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/);

    if(pattern.test(emailAddress)) {
    	$(element).removeClass('is-invalid-input')
    	$(element).siblings('.form-error').removeClass('is-visible')
    }
    else {
    	$(element).addClass('is-invalid-input')
    	$(element).siblings('.form-error').addClass('is-visible')
    }
  };