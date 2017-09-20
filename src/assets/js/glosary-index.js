const $glosaryIndex = $('.js-glosary-index');

$glosaryIndex.change((e) => {
  const $glosaryIndexTarget = $glosaryIndex.val();

  foundation('scrollToLoc', $glosaryIndexTarget);
});


[].slice.call( document.querySelectorAll( 'select.selectGlosary.cs-select' ) ).forEach( (el) => {
  const options = {
    onChange: function( val ) {
      const $glosaryIndexTarget = val
      console.log(val, 'VAL')
      $('.glosary-index').foundation('scrollToLoc', $glosaryIndexTarget);

    }
  }

  new SelectFx(el, options);
}); 