
// Configure | ©Nick Freear.

var Date = window.Date;
var location = window.location;

module.exports.config = function (TRANSLATE_TEXTS, DATES) {
  'use strict';

  var YEAR = new Date().getFullYear();
  var GAAD_DATE = DATES.dates[ YEAR ];
  var GAAD_NEXT = DATES.dates[ YEAR + 1 ];

  var defaults = {
    id: 'id-gaad',
    script: '/gaad-widget', // Was: 'GAAD.widget.', // .js OR .min.js;
    lang: 'en',
    dir: 'ltr',
    texts: TRANSLATE_TEXTS,
    url: 'http://globalaccessibilityawarenessday.org/?utm_source=github&utm_campaign=gaad-widget',
    days_before: 10,
    days_after: 10,
    embed: false,
    style_url: '/../../style/gaad-widget.css', // Was: '/../../style/GAAD.widget.css'
    theme: 'blue', // OR: 'black'
    should_show: null,
    is_before: null,
    xreplace: GAAD_DATE,
    date: GAAD_DATE,
    date_next: GAAD_NEXT,
    // Was: datefmt: GAAD_DATE.toString('MMMM dS, yyyy'),
    today: new Date(),
    xth: YEAR - 2011,
    debug: /[?&]debug=1/.test(location.search),
    force: /[?&]gaadwidget=force/i.test(location.search)
  };

  return defaults;
};
