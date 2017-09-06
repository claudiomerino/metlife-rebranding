
	function validateEmail(emailAddress, element) {
		console.log(emailAddress, 'emailAddress sample')
		console.log(element, 'element sample')
    var pattern = new RegExp(/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/);
    console.log(pattern, 'pattern email')
    console.log(pattern.test(emailAddress), 'pattern.test(emailAddress)')

    if(pattern.test(emailAddress)) {
    	$(element).removeClass('is-invalid-input')
    	$(element).siblings('.form-error').removeClass('is-visible')
    }
    else {
    	$(element).addClass('is-invalid-input')
    	$(element).siblings('.form-error').addClass('is-visible')
    }
  };