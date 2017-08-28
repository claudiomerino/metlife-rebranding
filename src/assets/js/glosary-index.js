const $glosaryIndex = $('.js-glosary-index');

$glosaryIndex.change((e) => {
  const $glosaryIndexTarget = $glosaryIndex.val();

  foundation('scrollToLoc', $glosaryIndexTarget);
});
