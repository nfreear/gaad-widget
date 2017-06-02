/*!
  GAAD.widget.js | © Nick Freear | License: MIT | NOT an official widget!

  https://github.com/nfreear/gaad-widget
  http://globalaccessibilityawarenessday.org
*/

require('datejs');

const TRANSLATE_TEXTS = {
  en: require('./locales/en'),
  fr: require('./locales/fr')
};
const DEFAULTS = require('./src/configure').config(TRANSLATE_TEXTS);
const METHODS = require('./src/methods');

require('./src/widget-src').run(DEFAULTS, METHODS);
