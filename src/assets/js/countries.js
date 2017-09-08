
  $( document ).ready( function(e) {

  	let $phone = $('.ChangeContryPhone')
  	let $cellPhone = $('.ChangeContryCellPhone')

    $phone.add( $cellPhone ).intlTelInput({
			  initialCountry: "auto",
			  geoIpLookup: function(callback) {
			    $.get('http://ipinfo.io', function() {}, "jsonp").always(function(resp) {
			      var countryCode = (resp && resp.country) ? resp.country : "";
			      callback(countryCode);
			    });
			  }
			});

  });

