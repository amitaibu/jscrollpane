// $Id:$
(function ($) {
/**
 * Add rounded corners.
 */
Drupal.behaviors.jScroll = {
  attach: function (context) {
    // Set the scroll pane.
    if (Drupal.settings.jscroll.commands) {
      var jscroll = Drupal.settings.jscroll.commands;

      var options = {};
      // Add the rounded corners to the page.
      for (var key in jscroll) {
        options = {};
        // Build the options if exist.
        if ($(jscroll[key]['options']).length > 0) {
          options = jscroll[key]['options'];
        }

        console.log(jscroll[key]['selector']);
        $(jscroll[key]['selector']).scrollbar(options);
      }
    }
  }
}
})(jQuery);
