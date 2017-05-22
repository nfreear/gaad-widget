#!/usr/bin/env node

/**
 * Node CLI. Build iCalendar and JSON data files.
 *
 * @copyright © Nick Freear, 19-May-2017.
 * @license   MIT.
 * @link      https://github.com/nfreear/gaad-widget
 */
const NO_LIABILITY =
'License: MIT. The data is provided "as is". I accept no responsibility for the accuracy or otherwise of the data, or any losses arising.';

const path = require('path');
const ICS_FILE = path.join(__dirname, '/../data/gaad.en.ics');
const JSON_FILE = path.join(__dirname, '/../data/gaad.json');
const LOCALE_DIR = path.join(__dirname, '/../locales/');
// const LOCALE_FILE = path.join(__dirname, '/../src/locales.json');
// const JSON_TEXT = path.join(__dirname, '/../src/gaad-texts.json');

const GAAD_START_YEAR = 2011;
const LIMIT_YEARS = 15;
// const A_DAY = 24 * 60 * 60;

const fs = require('fs');
const icalendar = require('icalendar');
const datejs = require('datejs');

const texts = readLocaleTexts(LOCALE_DIR);
const GAAD_URL = texts.en.url;
const today = new Date();

var ical = new icalendar.iCalendar(); // eslint-disable-line
var gaadobj = {
  '//': NO_LIABILITY,
  'timestamp': today.toString('u'),
  texts: texts,
  dates: {}
};
var idx;

ical.setProperty('X-WR-CALNAME', 'GAAD: ' + GAAD_URL);
ical.setProperty('X-WR-CALDESC', NO_LIABILITY);

for (idx = 0; idx < LIMIT_YEARS; idx++) {
  var event = ical.addComponent('VEVENT');
  var year = (GAAD_START_YEAR + idx) + '';

  var GAAD_DATE = new Date(year).may().third().thursday();

  console.log('> GAAD %d: %s', idx + 0, GAAD_DATE.toString());

  event.setSummary('Global Accessibility Awareness Day (GAAD) #' + (idx + 0));
  // event.setDate(GAAD_DATE, A_DAY); // Duration in seconds
  event.setDescription('Join in at – ' + GAAD_URL);
  event.addProperty('CREATED', today.toString('u'));
  event.setProperty('DTSTART;VALUE=DATE', GAAD_DATE.toString('yyyyMMdd'));
  event.setProperty('DTEND;VALUE=DATE', GAAD_DATE.toString('yyyyMMdd'));

  gaadobj.dates[ year ] = {
    '{x}': idx + 0,
    '{d}': GAAD_DATE.toString('dd'),
    '{th}': GAAD_DATE.toString('S'),
    '{m}': GAAD_DATE.toString('MMMM'),
    '{y}': GAAD_DATE.toString('yyyy')
  };
}

var json = JSON.stringify(gaadobj, null, 2);
// var locjson = JSON.stringify(texts, null, 2);
var ics = ical.toString();

fs.writeFile(JSON_FILE, json);
// fs.writeFile(LOCALE_FILE, locjson);
fs.writeFile(ICS_FILE, ics);

setTimeout(function () {
  var jsonstat = fs.statSync(JSON_FILE);
  var icsstat = fs.statSync(ICS_FILE);

  console.log('JSON, %d bytes: %s', jsonstat.size, JSON_FILE);
  console.log('iCal, %d bytes: %s', icsstat.size, ICS_FILE);
}, 100);

console.log(datejs);

// ------------------------------------

function readLocaleTexts (localedir) {
  var texts = {};
  fs.readdirSync(localedir).forEach(function (file) {
    console.log('Locale: %s', file);

    var locale = file.replace('.json', '');
    var jsontext = fs.readFileSync(localedir + file, 'utf8');
    texts[ locale ] = JSON.parse(jsontext);
  });

  return texts;
}

// End.
