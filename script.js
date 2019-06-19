$(document).ready(() => {
  // Offset Fixed Navigation
  $('.nav-link, .mobile-links a, .btn-prime').click((e) => {
    const linkTarget = $(e.currentTarget).attr('href');

    if (linkTarget === '#' || linkTarget.charAt(0) !== '#') {
      return;
    }
    e.preventDefault();

    let topOffset = $(linkTarget).offset().top;
    let navContainer = '.fixed-top';
    if ($('.mobile-nav').is(':visible')) {
      if ($('#burger').is(':checked')) {
        navContainer = '.mobile-menu input~nav';
        $('#burger').trigger('click');
      }
    }

    topOffset -= $(navContainer).height();

    $('html, body').animate({
      scrollTop: topOffset,
    }, 900);
  });



  // Slick Slider
  $('.your-class').slick();

  // Wheel Click Modal
  $('button.btn-prime').on('mousedown', (e) => {
    if (e.which === 2) {
      e.preventDefault();
      e.stopPropagation();
      $(e.currentTarget).trigger('click');
    }
  });
});
