(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
module.exports={"dates":{"2011":{"{x}":0,"{d}":19,"{th}":"th","{m}":"May","{y}":2011,"ts":1305759600000},"2012":{"{x}":1,"{d}":17,"{th}":"th","{m}":"May","{y}":2012,"ts":1337209200000},"2013":{"{x}":2,"{d}":16,"{th}":"th","{m}":"May","{y}":2013,"ts":1368658800000},"2014":{"{x}":3,"{d}":15,"{th}":"th","{m}":"May","{y}":2014,"ts":1400108400000},"2015":{"{x}":4,"{d}":21,"{th}":"st","{m}":"May","{y}":2015,"ts":1432162800000},"2016":{"{x}":5,"{d}":19,"{th}":"th","{m}":"May","{y}":2016,"ts":1463612400000},"2017":{"{x}":6,"{d}":18,"{th}":"th","{m}":"May","{y}":2017,"ts":1495062000000},"2018":{"{x}":7,"{d}":17,"{th}":"th","{m}":"May","{y}":2018,"ts":1526511600000},"2019":{"{x}":8,"{d}":16,"{th}":"th","{m}":"May","{y}":2019,"ts":1557961200000},"2020":{"{x}":9,"{d}":21,"{th}":"st","{m}":"May","{y}":2020,"ts":1590015600000},"2021":{"{x}":10,"{d}":20,"{th}":"th","{m}":"May","{y}":2021,"ts":1621465200000},"2022":{"{x}":11,"{d}":19,"{th}":"th","{m}":"May","{y}":2022,"ts":1652914800000},"2023":{"{x}":12,"{d}":18,"{th}":"th","{m}":"May","{y}":2023,"ts":1684364400000},"2024":{"{x}":13,"{d}":16,"{th}":"th","{m}":"May","{y}":2024,"ts":1715814000000},"2025":{"{x}":14,"{d}":15,"{th}":"th","{m}":"May","{y}":2025,"ts":1747263600000},"2026":{"{x}":15,"{d}":21,"{th}":"st","{m}":"May","{y}":2026,"ts":1779318000000},"2027":{"{x}":16,"{d}":20,"{th}":"th","{m}":"May","{y}":2027,"ts":1810767600000},"2028":{"{x}":17,"{d}":18,"{th}":"th","{m}":"May","{y}":2028,"ts":1842217200000},"2029":{"{x}":18,"{d}":17,"{th}":"th","{m}":"May","{y}":2029,"ts":1873666800000},"2030":{"{x}":19,"{d}":16,"{th}":"th","{m}":"May","{y}":2030,"ts":1905116400000},"2031":{"{x}":20,"{d}":15,"{th}":"th","{m}":"May","{y}":2031,"ts":1936566000000},"2032":{"{x}":21,"{d}":20,"{th}":"th","{m}":"May","{y}":2032,"ts":1968620400000}}}
},{}],2:[function(require,module,exports){
module.exports={
  "en": {
    "name": "Global Accessibility Awareness Day (GAAD)",
    "before": "Join us on Thursday May {d}{th}, {y} and mark the {x}th <a {at}>{g}</a>.",
    "after": "Put next year's <a {at}>{g}</a>, Thursday May {d}{th}, {y}, in your diary. See you then!",
    "put": "Put gaad-widget on your web site",
    "ical": "Download an iCal calendar file",
    "url": "https://accessibility.day"
  },
  "es": {
    "name": "Día Mundial para Promover la Concienciación sobre la Accesibilidad Web (GAAD)",
    "before": "El {d} de mayo de {y}, le invitamos a participar en el {x} ° <a {at}>{g}</a>.",
    "after": "Coloque el <a {at}>{g}<a> del próximo año, el jueves {d} de mayo de {y}, en su diario. ¡Hasta entonces!",
    "url": "/espanol/"
  },
  "fr": {
    "name": "Journée Mondiale de Sensibilisation à l'Accessibilité (GAAD)",
    "before": "Rejoignez-nous le jeudi {d} mai {y} et marquez le {x}ème <a {at}>{g}</a>.",
    "after": "Mettez le <a {at}>{g}</a> de l'année prochaine, le jeudi {d} mai {y} dans votre journal. À plus tard!",
    "put": "Mettez 'gaad-widget' sur votre site web",
    "ical": "Télécharger un fichier de calendrier (iCal)",
    "url": "/francais/"
  },
  "zh-cn": {
    "name": "国际残疾人网上科技使用活动日 (GAAD)",
    "before": "欢迎在每年5月份的第三个星期四加入我们，— <a {at}>{g}</a>。",
    "after": "请在您的日历上标注5月  日举行的活动日 — <a {at}>{g}</a>。",
    "ical": "下载 iCal 日历文件",
    "url": "/"
  }
}
},{}],3:[function(require,module,exports){
/*!

  gaad-widget.js | © 2018 Nick Freear | License: MIT | NOT an official widget!

  https://github.com/nfreear/gaad-widget
  http://globalaccessibilityawarenessday.org
*/

'use strict';

const VERSION = '3.5.0'; // <Auto>
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

},{"./data/gaad-dates.min":1,"./data/locales":2,"./src/configure":5,"./src/methods":6,"./src/widget-src":7,"node-analytics-ga":4}],4:[function(require,module,exports){
/*!
  A basic Google Analytics wrapper | © Nick Freear, 06-July-2017.
*/

module.exports = {
  create: create,
  pageView: pageView,
  sendEvent: sendEvent
};

var WIN = window;
var DOC = WIN.document;
var LOC = WIN.location;

var analyticsCfg = {};
var enable = false;
var gaFn;
var sendName;

/** create
 * @public

 var config = {
   id: 'UA-XXXXX-Y', // Required.
   name: 'gaadWidget', // Required.
   fn: 'myGA' // Optional.
 };

 */
function create (config) {
  // Setup private vars.
  enable = config && config.id;
  analyticsCfg = config;

  if (!enable) {
    console.warn('no analytics');
    return;
  }

  analyticsCfg.fn = analyticsCfg.fn || 'ga';

  includeJavascript(analyticsCfg.fn);

  return createTracker();
}

/** createTracker.
 * @private
 */
function createTracker () {
  gaFn = WIN[ analyticsCfg.fn ];
  sendName = analyticsCfg.name ? analyticsCfg.name + '.send' : 'send';

  // ga('create', 'UA-XXXXX-Y', 'auto');
  gaFn('create', analyticsCfg.id, 'auto', analyticsCfg.name);

  console.warn('analytics: ', analyticsCfg);

  return analyticsCfg;
}

/** pageView.
 * @public
 */
function pageView () {
  if (!enable) return;

  var path = null;
  if (analyticsCfg.isWidget) {
    // Widgets: include "host" in the path sent to pageview.
    path = LOC.host + LOC.pathname + LOC.search.replace(/^\?/, '!');
  }

  gaFn(sendName, 'pageview', path);
}

/** sendEvent.
 * @public
 */
function sendEvent (cat, act, label, value) {
  if (!enable) return;

  gaFn(sendName, 'event', cat, act, label, value);
  console.warn('analytics.event: ', cat, act, label, value);
}

/** includeJavascript.
 * @private
 */
function includeJavascript (gaName) {
  var existingJs = DOC.querySelector('script[ src *= google-analytics ]');

  if (!existingJs) {
     /* eslint-disable */
    (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
      (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
      m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
    })(window, document, 'script', 'https://www.google-analytics.com/analytics.js', gaName /* || 'ga' */);
     /* eslint-enable */
  }
}

},{}],5:[function(require,module,exports){

// Configure | ©Nick Freear.

const queryString = window.location.href; // Was: W.location.search;

module.exports.config = function (TRANSLATE_TEXTS, DATES, VERSION, VERSION_HAT) {
  'use strict';

  const YEAR = new Date().getFullYear();
  const GAAD_DATE = DATES.dates[YEAR];
  const GAAD_NEXT = DATES.dates[YEAR + 1];
  const M_LANG = queryString.match(/[&?#!]lang=(\w{2}(-\w{2})?)/);

  const defaults = {
    id: 'id-gaad-widget',
    script: '/gaad-widget', // .js OR .min.js;
    lang: M_LANG ? M_LANG[1] : 'en',
    dir: 'ltr',
    texts: TRANSLATE_TEXTS,
    url: 'http://globalaccessibilityawarenessday.org/?utm_source=github&utm_campaign=gaad-widget',
    days_before: 10,
    days_after: 10,
    embed: false,
    style_url: '/../../style/gaad-widget.css',
    theme: 'blue', // OR: 'black', or 'ical-hide'.
    should_show: null,
    is_before: null,
    xreplace: GAAD_DATE,
    date: GAAD_DATE,
    date_next: GAAD_NEXT,
    // Was: datefmt: GAAD_DATE.toString('MMMM dS, yyyy'),
    today: new Date((new Date()).toDateString()), // At midnight: 00:00:00!
    xth: YEAR - 2011,
    analytics: {
      isWidget: true,
      name: 'gaadWidget',
      id: 'UA-102188521-1'
    },
    ical_widget: '<a class=c href="https://unpkg.com/gaad-widget@{v}/data/gaad.en.ics" aria-label="{p}" title="{p}">{c}</a>',
    ical_char: '&#x1F4C6;', // 'Tear off calendar' emoji - https://emojipedia.org/tear-off-calendar/
    put_widget: '<a class=p href="https://github.com/nfreear/gaad-widget#usage" aria-label="{p}" title="{p} (v{v})" target=_top >{c}</a>',
    put_char: '&#x2193;', // 'Downwards arrow to bar' - http://xahlee.info/comp/unicode_arrows.html; http://amp-what.com/
    debug: /[&?#!]debug=1/.test(queryString),
    force: /[&?#!]gaad.?widget=f(orce)?/i.test(queryString)
  };

  defaults.version = VERSION;
  defaults.version_hat = VERSION_HAT;

  return defaults;
};

},{}],6:[function(require,module,exports){

// Functions: extend, setHTML, addStylesheet.. | ©Nick Freear.

// const W = window;
const D = document;
let CFG;

module.exports = {

  getConfig: function (defaults, methods) {
    const configEl = D.querySelector('script[ data-gaad-widget ]');

    const data = configEl ? configEl.getAttribute('data-gaad-widget') : null;
    const options = data ? JSON.parse(data) : {};

    const gaad = methods.extend(defaults, options);

    const scriptEl = D.querySelector('script[ src *= "' + gaad.script + '" ]');

    gaad.log = gaad.debug && console ? console.warn : function () {};

    gaad.script_url = scriptEl.src;

    CFG = gaad;

    return gaad;
  },

  addDays: function (dateObj, days) {
    return dateObj.ts + (days * 24 * 60 * 60 * 1000); // Milliseconds.
  },

  // JuhQ (16 July 2015): https://gist.github.com/pbojinov/8f3765b672efec122f66#gistcomment-1493930
  extend: function () {
    const extended = {};
    let key;
    let prop;

    for (key in arguments) {
      const argument = arguments[key];
      for (prop in argument) {
        if (Object.prototype.hasOwnProperty.call(argument, prop)) {
          extended[prop] = argument[prop];
        }
      }
    }
    return extended;
  },

  trans: function (msgid, vars) {
    const texts = CFG.texts;
    const msgstr = texts[CFG.lang][msgid] || texts.en[msgid];
    return msgstr; // replaceObj( msgstr, vars );
  },

  // Ben McCormick (24 March 2013), SirDerpington:
  // http://stackoverflow.com/questions/15604140/replace-multiple-strings-with-multiple-other-strings
  replaceObj: replaceObj,

  setHTML: function (gaad) {
    const elem = D.getElementById(gaad.id);

    elem.lang = gaad.lang;
    elem.dir = gaad.dir;
    elem.setAttribute('role', 'alert');
    elem.className = replaceObj('gaad-widget-js {t} {e} {i}', { '{t}': gaad.theme, '{e}': gaad.embed ? 'embed' : 'no-embed', '{i}': gaad.dayClass });
    elem.innerHTML = gaad.message; // Was: 'gaad.join'
  },

  addStylesheet: function (gaad) {
    const styleEl = D.createElement('link');
    styleEl.rel = 'stylesheet';
    styleEl.type = 'text/css';
    styleEl.href = decideStyleUrl(gaad);

    D.head.appendChild(styleEl);
  }
};

function decideStyleUrl (CFG) {
  // Support for 'unpkg' CDN short URL.
  if (/@\d\.\d\.\d(-[\w.]+)(#|_.js|$)/.test(CFG.script_url)) {
    CFG.log('GAAD: npm @version found');
    CFG.style_url = CFG.style_url.replace('/../..', '');
    CFG.script_url = CFG.script_url.replace(/(#.*|_\.js)/, '');
  }
  return CFG.script_url + CFG.style_url;
}

function replaceObj (str, mapObj) {
  const re = new RegExp(Object.keys(mapObj).join('|'), 'g'); // Was: "gi".

  return str.replace(re, function (matched) {
    return mapObj[matched]; // Was: matched.toLowerCase().
  });
}

},{}],7:[function(require,module,exports){

// Main widget 'run' function | ©Nick Freear.

module.exports.run = function (defaults, methods) {
  'use strict';

  const gaad = methods.getConfig(defaults, methods);

  const texts = gaad.texts;
  const GAAD_DATE = gaad.date;
  const GAAD_NEXT = gaad.date_next;

  gaad.show_date = methods.addDays(GAAD_DATE, -gaad.days_before); // new Date(GAAD_DATE).addDays(-gaad.days_before); // Clone.
  gaad.hide_date = methods.addDays(GAAD_DATE, gaad.days_after); // new Date(GAAD_DATE).addDays(gaad.days_after);

  // gaad.diff_days = gaad.today.toString('dd') - gaad.show_date.toString('dd');
  gaad.diff_show = gaad.today - gaad.show_date;
  gaad.diff_hide = gaad.today - gaad.hide_date;

  gaad.should_show = (gaad.diff_show >= 0 && gaad.diff_hide < 0);

  gaad.is_today = (gaad.today - gaad.date.ts) === 0;
  gaad.is_before = (gaad.today - gaad.date.ts) <= 0; // Use: 'JS Date - timestamp' (implicite cast), works!

  if (!gaad.is_before) {
    gaad.xreplace = GAAD_NEXT;
  }

  gaad.dayClass = gaad.is_today ? 'is-today' : gaad.is_before ? 'is-before' : 'is-after';

  gaad.xreplace['{at}'] = methods.replaceObj(' href="{u}" target="_top" title="{t}"', { '{u}': gaad.url, '{t}': texts.en.name });
  gaad.xreplace['{x}'] = gaad.xth;
  // Was: gaad.xreplace[ '{g}' ] = gaad.texts.en.name;

  const lang = texts[gaad.lang] ? gaad.lang : 'en';
  gaad.lang = lang;

  const replaceObj = methods.replaceObj;

  const template = gaad.is_before ? texts[lang].before : texts[lang].after;
  const putWidget = replaceObj(gaad.put_widget, { '{p}': methods.trans('put'), '{c}': gaad.put_char, '{v}': gaad.version });
  const calWidget = replaceObj(gaad.ical_widget, { '{p}': methods.trans('ical'), '{c}': gaad.ical_char, '{v}': gaad.version_hat });

  gaad.xreplace['{g}'] = texts[lang].name;
  gaad.message = replaceObj(template, gaad.xreplace) + replaceObj('<div class="w">{p}{c}</div>', { '{c}': calWidget, '{p}': putWidget });

  if (!gaad.should_show && !gaad.force) {
    return gaad.log('GAAD: no-show', gaad);
  }

  gaad.log('GAAD: show', gaad);

  runAnalytics(methods.analytics, gaad.analytics);

  methods.addStylesheet(gaad);

  methods.setHTML(gaad);

  console.log('Happy GAAD! ~ http://globalaccessibilityawarenessday.org');

  return gaad;
};

function runAnalytics (analyticsFn, config) {
  if (config) {
    analyticsFn.create(config);
    analyticsFn.pageView();

    // analyticsFn.initialize(analyticsCfg.id, { name: analyticsCfg.name, debug: gaad.debug });
    // analyticsFn.pageview();
  }
}

},{}]},{},[3])
//# sourceMappingURL=gaad-widget.js.map
