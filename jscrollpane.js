// $Id:$

/**
 * Add rounded corners.
 */
Drupal.behaviors.jScrollPane = function() {
  // Set the rounded corners.
  if (Drupal.settings.jscrollpane.commands) {
    var jscrollpane = Drupal.settings.jscrollpane.commands;

    var options = {};
    // Add the rounded corners to the page.
    for (var key in jscrollpane) {
      options = {};
      // Build the options if exist.
      if ($(jscrollpane[key]['options']).length > 0) {
        options = jscrollpane[key]['options'];
      }

      $(jscrollpane[key]['selector']).jScrollPane(options);
    }
  }
}