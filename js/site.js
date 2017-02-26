$(function () {
  // Activate clipboard
  var clip = new Clipboard('.btn');

  // Activate sticky sidebar
  $('.sticky').Stickyfill();

  // Toggle "Show Info" / "Hide Info" button
  $('.collapse-button').on('click', function () {

    var button = $(this);
    var state = button.html().trim();
    var up = 'Show Info <i class="fa fa-arrow-circle-down" aria-hidden="true"></i>';
    var down = 'Hide Info <i class="fa fa-arrow-circle-up" aria-hidden="true"></i>';

    state === up ? button.html(down) : button.html(up);
  });

  var hamburgerButton = $('#hamburger-button');
  hamburgerButton.click(function () {
    hamburgerButton.toggleClass('is-active');
  });

});
