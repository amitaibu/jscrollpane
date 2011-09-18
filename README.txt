DESCRIPTION
===========
Wrapper module for the jScrollPane jQuery plugin written by Kevin Luck
http://jscrollpane.kelvinluck.com/

INSTALLATION
============
1. Download Jquery plugin from https://github.com/vitch/jScrollPane
   (Tested with 2.x version of jScrollPane)
2. Rename folder to jquery.jscrollpane
3. Place folder under sites/all/libraries -- you should have 
   sites/all/libraries/jquery.jscrollpane/script/jquery.jscrollpane.js
4. Enable jscrollpane module and its dependencies

USAGE
===
jScrollpane is an API module. It has no UI of it's own, and you should use it 
via your custom module or theme. Here is an example form a custom module's 
hook_init() implementation.

The API function gets an array of commands with two parameters:
  - selector: The selector as passed to jQuery.
  - Options: Array that will be casted to Javascript, and passed to the 
    jScrollPane jQuery plugin. All the available options are listed in 
    http://jscrollpane.kelvinluck.com/

/**
 * Implements hook_init().
 */
function example_init() {
  // foo class will get default scroll.
  $commands[] = array('selector' => '.foo');
 
  // bar ID will get scroll with min and max scroll set to 80px.
  $commands[] = array(
   'selector' => '#bar',
   'options' => array(
     'verticalDragMinHeight' => 80,
     'verticalDragMaxHeight' => 80,
   ),
  );
 
  jscrollpane_add_jscroll($commands);
}