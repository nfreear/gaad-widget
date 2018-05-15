/*!

  gaad-widget.js | © 2018 Nick Freear | License: MIT | NOT an official widget!

  https://github.com/nfreear/gaad-widget
  http://globalaccessibilityawarenessday.org
*/

'use strict';

var VERSION = '3.2.2'; // <Auto>
var VERSION_HAT = '^3';

var TRANSLATE_TEXTS = require('./data/locales'); // JSON.
var GAAD_DATE_LOOKUP = require('./data/gaad-dates.min'); // JSON.
// console.log(GAAD_DATE_LOOKUP);
var DEFAULTS = require('./src/configure').config(TRANSLATE_TEXTS, GAAD_DATE_LOOKUP, VERSION, VERSION_HAT);
var METHODS = require('./src/methods');

METHODS.analytics = require('node-analytics-ga');
// METHODS.analytics = require('universal-ga');
// METHODS.analytics = require('./google-analytics/index');

require('./src/widget-src').run(DEFAULTS, METHODS);
