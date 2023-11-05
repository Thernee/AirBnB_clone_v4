
$(document).ready(function () {
  const allIds = {};

  $('input[type="checkbox"]').change(function () {
    if ($(this).is(':checked')) {
      allIds[this.dataset.id] = this.dataset.name;
    } else {
      delete allIds[this.dataset.id];
    }
    const names = Object.values(allIds);
    $('.amenities h4').text(names.join(', '));
  });

  const url = 'http://0.0.0.0:5001/api/v1/places_search/';
  $.get(url, function (response) {
    if (response.status === 'OK') {
      $('div#api_status').addClass('available');
    } else {
      $('div#api_status').removeClass('available');
    }
  });
});
