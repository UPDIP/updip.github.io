// Activate clip
$(function () {
  var clip = new Clipboard('.btn');
});

// Use placeholder if avatar image is missing
$(function () {

  $('.sticky').Stickyfill();

  $('.img-avatar').one('error', function () {
    this.src = '/img/missing.png'
  });
});
