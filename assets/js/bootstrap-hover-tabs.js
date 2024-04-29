// (function ($) {
//   $(function () {
//     $(document).off('click.bs.tab.data-api', '[data-hover="tab"]');
//     $(document).on('mouseenter.bs.tab.data-api', '[data-bs-toggle="tab"], [data-hover="tab"]', function () {
//       $(this).tab('show');
//     });
//   });
// });

$(document).ready(function() {
  $('#mainMenu .nav > .nav-item > .nav-link').hover(function() {
    $(this).tab('show');
  });
});