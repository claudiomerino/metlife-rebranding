
  let $openContent = $( '.openContent' );


  $('body').on( 'click', '.openContent', ( e ) => {
    e.preventDefault();

    let $openContentData = $( e.currentTarget ).data( 'open-content' );
    let $toggleContentData = $( '.toggleContent[data-toggle-content=' + $openContentData + ']' );
    let $openContentText = $( e.currentTarget ).find( 'span' );
    let $dataClose = $( e.currentTarget ).find( 'span' ).data( 'close' );

    let $restText = $( e.currentTarget ).find( '.openContentText' ).data( 'rest-text' );
    let $openText = $( e.currentTarget ).find( '.openContentText' ).data( 'open-text' );

    $toggleContentData.toggleClass( 'is-open' );
    $openContentText.toggleClass( 'is-open' );
    $openContentText.closest('td').toggleClass( 'is-open' );

    $( e.currentTarget ).toggleClass( 'is-open' );

    if( $dataClose ) {

      if( !$openContentText.hasClass( 'is-open' ) ) {
        $openContentText.html( $restText );
      }
      else {
        $openContentText.html( $openText );
      }

    }

    else {

      if( $openContentText.hasClass( 'is-open' ) ) {
        $openContentText.html( $restText );
      }
      else {
        $openContentText.html( $openText );
      }

    }
  });
