
  function detectIE() {
      var ua = window.navigator.userAgent;

      // IE 10 or older
      var msie = ua.indexOf('MSIE ');
      // IE 11 or older
      var trident = ua.indexOf('Trident/');
      if (msie > 0 || trident > 0) {
        tkObjectFit();

      }

      // other browser
      return false;
  }

  detectIE();