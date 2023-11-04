
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
});
