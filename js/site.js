$(function () {
  // Activate clipboard
  var clip = new Clipboard('.btn');

  // Activate sticky sidebar
  $('.sticky').Stickyfill();

  $('.collapse-button').on('click', function () {
    var button = $(this);
    var state = button.text().trim();

    state == 'Show Info >' ? button.text('Hide Info >') : button.text('Show Info >');
  });
});
