
// Configure | ©Nick Freear.

var W = window;
var Date = W.Date;
var queryString = W.location.href; // Was: W.location.search;

module.exports.config = function (TRANSLATE_TEXTS, DATES, VERSION) {
  'use strict';

  var YEAR = new Date().getFullYear();
  var GAAD_DATE = DATES.dates[ YEAR ];
  var GAAD_NEXT = DATES.dates[ YEAR + 1 ];
  var M_LANG = queryString.match(/[&?#!]lang=(\w{2}(-\w{2})?)/);

  var defaults = {
    id: 'id-gaad-widget',
    script: '/gaad-widget', // Was: 'GAAD.widget.', // .js OR .min.js;
    lang: M_LANG ? M_LANG[ 1 ] : 'en',
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
    analytics: {
      isWidget: true,
      name: 'gaadWidget',
      id: 'UA-102188521-1'
    },
    put_widget: '<a class=p href="https://github.com/nfreear/gaad-widget#usage" aria-label="{p}" title="{p} (v{v})" target=_top >{c}</a>',
    put_char: '&#x2193;', // 'Downwards arrow to bar' - http://xahlee.info/comp/unicode_arrows.html; http://amp-what.com/
    debug: /[&?#!]debug=1/.test(queryString),
    force: /[&?#!]gaad.?widget=f(orce)?/i.test(queryString)
  };

  defaults.version = VERSION;

  return defaults;
};
