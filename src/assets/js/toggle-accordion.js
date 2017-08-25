const $toggleAccordion = $('.toggleAccordion');

$toggleAccordion.on('click', (e) => {
  e.preventDefault();

  const $toggleAccordionGroup = $('.' + $( e.currentTarget ).data( 'toggle-accordion-group' ));
  const $toggleAccordionContent = $toggleAccordionGroup.find('.accordion-content');
  const $toggleAccordionText = $( e.currentTarget ).find( '.toggleAccordionText' );
  const $restText = $toggleAccordionText.data('rest-text');
  const $openText = $toggleAccordionText.data('open-text');
  const $toggleAction = $toggleAccordionText.data('action');

  if ($toggleAction === 'close') {
    $toggleAccordionGroup.foundation('up', $toggleAccordionContent);
    $toggleAccordionText.data('action', '');
    $toggleAccordionText.html($restText);
  } else {
    $toggleAccordionGroup.foundation('down', $toggleAccordionContent);
    $toggleAccordionText.data('action', 'close');
    $toggleAccordionText.html($openText);
  }
});
