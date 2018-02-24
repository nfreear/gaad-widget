#!/usr/bin/env node

/**
 * Node CLI. Build iCalendar, JSON data and lookup files.
 *
 * @copyright © Nick Freear, 19-May-2017, 2018.
 * @license   MIT.
 * @see       https://github.com/nfreear/gaad-widget
 */
const NO_LIABILITY =
"License: MIT. The data is provided 'as is'. I accept no responsibility for the accuracy or otherwise of the data, or any losses arising.";

const PKG = require('../package.json');
const ICS_FILE = abspath('../data/gaad.en.ics');
const JSON_FILE = abspath('../data/gaad.json');
const MIN_FILE = abspath('../data/gaad-dates.min.json');
const LOCALE_DIR = abspath('../locales/');
const LOCALE_FILE = abspath('../data/locales.json');
// const JSON_TEXT = abspath('../src/gaad-texts.json');

const GAAD_START_YEAR = 2011;
const LIMIT_YEARS = 15;
// const A_DAY = 24 * 60 * 60;

const icalendar = require('icalendar');
const datejs = require('datejs');

const texts = readLocaleTexts(LOCALE_DIR, PKG[ 'x-locales' ]);
const GAAD_URL = texts.en.url;
const today = new Date();

var ical = new icalendar.iCalendar(); // eslint-disable-line
var gaadobj = {
  '#': NO_LIABILITY,
  name: PKG.name,
  version: PKG.version,
  timestamp: today.toString('u'),
  url: PKG.repository,
  // texts: texts,
  locales: PKG[ 'x-locales' ],
  count_years: LIMIT_YEARS,
  dates: {}
};
var idx;

ical.setProperty('X-WR-CALNAME', 'GAAD: ' + GAAD_URL);
ical.setProperty('X-WR-CALDESC', NO_LIABILITY);

for (idx = 0; idx < LIMIT_YEARS; idx++) {
  var event = ical.addComponent('VEVENT');
  var year = (GAAD_START_YEAR + idx) + '';

  // "...we invite you to help us mark GAAD on the third Thursday of May."
  // ~~  http://globalaccessibilityawarenessday.org/background.html  ~~
  var GAAD_DATE = new Date(year).may().third().thursday();

  console.log('> GAAD %d: %s', idx + 0, GAAD_DATE.toString());

  event.setSummary('Global Accessibility Awareness Day (GAAD) #' + (idx + 0));
  // event.setDate(GAAD_DATE, A_DAY); // Duration in seconds
  event.setDescription('Join in at – ' + GAAD_URL);
  event.addProperty('CREATED', today.toString('u'));
  event.setProperty('DTSTART;VALUE=DATE', GAAD_DATE.toString('yyyyMMdd'));
  event.setProperty('DTEND;VALUE=DATE', GAAD_DATE.toString('yyyyMMdd'));

  gaadobj.dates[ year ] = {
    '{x}': parseInt(idx),
    '{d}': parseInt(GAAD_DATE.toString('dd')),
    '{th}': GAAD_DATE.toString('S'),
    '{m}': GAAD_DATE.toString('MMMM'),
    '{y}': parseInt(GAAD_DATE.toString('yyyy')),
    // iso: GAAD_DATE.toISOString(),
    ts: GAAD_DATE.getTime() // Milli-seconds since epoch.
  };
}

var gaaddates = {
  dates: gaadobj.dates
};

const json = JSON.stringify(gaadobj, null, 2);
const minjson = JSON.stringify(gaaddates);
const locjson = JSON.stringify(texts, null, 2);
const ics = ical.toString();

writeStatFile(JSON_FILE, json, 'JSON');
writeStatFile(LOCALE_FILE, locjson, 'LANG');
writeStatFile(MIN_FILE, minjson, 'MIN');
writeStatFile(ICS_FILE, ics, 'iCal');

console.log(datejs);

// ------------------------------------

function abspath (path) {
  return require('path').join(__dirname, path);
}

function writeStatFile (file, data, label) {
  const FS = require('fs');

  FS.writeFile(file, data, 'utf8', function (err) {
    if (err) throw err;

    const stat = FS.statSync(file);
    console.log('%s, %d bytes: %s', label, stat.size, file);
  });
}

function readLocaleTexts (localedir, locales) {
  var texts = {};
  var locale;

  for (var idx = 0; idx < locales.length; idx++) {
    locale = locales[ idx ];
    texts[ locale ] = removeJsonComments(require(localedir + locale));
  }
  return texts;
}

// https://github.com/i18next/i18next/issues/108#__A-comment
function removeJsonComments (locale) {
  var texts = {};
  var prop;
  // console.log(locale);

  for (prop in locale) {
    if (!prop.match(/^#_+/)) {
      texts[ prop ] = locale[ prop ];
    }
  }
  return texts;
}

// End.
