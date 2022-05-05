/*!

  gaad-widget.js | © 2018 Nick Freear | License: MIT | NOT an official widget!

  https://github.com/nfreear/gaad-widget
  http://globalaccessibilityawarenessday.org
*/

'use strict';

const VERSION = '3.4.0'; // <Auto>
const VERSION_HAT = '^3';

const TRANSLATE_TEXTS = require('./data/locales'); // JSON.
const GAAD_DATE_LOOKUP = require('./data/gaad-dates.min'); // JSON.
// console.log(GAAD_DATE_LOOKUP);
const DEFAULTS = require('./src/configure').config(TRANSLATE_TEXTS, GAAD_DATE_LOOKUP, VERSION, VERSION_HAT);
const METHODS = require('./src/methods');

METHODS.analytics = require('node-analytics-ga');
// METHODS.analytics = require('universal-ga');
// METHODS.analytics = require('./google-analytics/index');

require('./src/widget-src').run(DEFAULTS, METHODS);
