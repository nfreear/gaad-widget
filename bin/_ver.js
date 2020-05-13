#!/usr/bin/env node

/**
 * CLI. Implant `package.version` in index.js, README.md etc.
 *
 * @copyright © Nick Freear, 04-, 25-June-2017, 2018.
 * @license   MIT
 * @see       https://github.com/nfreear/gaad-widget
 */

const replace = require('replace');
const INDEX_JS = path('/../index.js');
const README = path('/../README.md');
const TEST_HTML = path('/../test/index.html');
const PKG = require('../package.json');
const VERSION_TAG = PKG.version; // Was: .replace(/\.0(-.+)?/, '$1');
const CARET_VERSION = PKG['x-version-hat']; // Example, '^3'

console.warn('VERSION_TAG :', VERSION_TAG, CARET_VERSION);

replace({
  paths: [INDEX_JS],
  regex: /VERSION = '.+';(.+Auto.)?/,
  replacement: version('VERSION = \'%s\'; // <Auto>'),
  count: true,
  recursive: false
});

replace({
  paths: [INDEX_JS],
  regex: /@version \d\.\d\.\d(-[.\w]+)?/,
  replacement: version('@version %s'),
  count: true,
  recursive: false
});

replace({
  paths: [README, TEST_HTML],
  regex: /\/gaad-widget(\/|@)(\d\.\d\.\d(-[.\w]+)?)/g,
  replacement: version('/gaad-widget$1%s'),
  count: true,
  recursive: false
});

replace({
  paths: [README],
  regex: /\/gaad-widget@[^\d]\d+(\.\d)?/g,
  replacement: '/gaad-widget@' + CARET_VERSION,
  count: true,
  recursive: false
});

function path (file) {
  return require('path').join(__dirname, file);
}

function version (str) {
  return str.replace('%s', VERSION_TAG);
}
