/*!
  GAAD.widget.js | ©Nick Freear 2017-04-27 | License: MIT.

  https://github.com/nfreear/gaad-widget
*/

(function (W, D, location, console, Date) {
  'use strict';

  if (typeof Date.today !== 'function') {
    return console.error('GAAD error: missing dependency, "Datejs"');
  }

  // "...we invite you to help us mark GAAD on the third Thursday of May."
  // ~~  http://globalaccessibilityawarenessday.org/background.html  ~~
  var GAAD_DATE = Date.may().third().thursday();
  var GAAD_NEXT = Date.today('+1 year').may().third().thursday();

  var defaults = {
    id: 'id-gaad',
    script: 'GAAD.widget.', // .js OR .min.js;
    lang: 'en',
    dir: 'ltr',
    texts: {
      en: {
        name: 'Global Accessibility Awareness Day (GAAD)',
        before: 'Join us on Thursday May {d}{th}, {y} and mark the {x}th <a {at}>{g}</a>.',
        after: 'Put next year\'s <a {at}>{g}</a>, Thursday May {d}{th}, {y}, in your diary. See you then!'
      },
      fr: {
        before: 'Rejoignez-nous le jeudi {d} mai {y} et marquez le {x}ème <a {at}>{g}</a>.',
        after: 'Mettez le <a {at}>{g}</a> de l\'année prochaine, le jeudi {d} mai {y} dans votre journal. À plus tard!'
      }
    },
    url: 'http://globalaccessibilityawarenessday.org/?utm_source=github&utm_campaign=gaad-widget',
    days_before: 10,
    days_after: 10,
    embed: false,
    style_url: '/../../style/GAAD.widget.css',
    theme: 'blue', // OR: 'black'
    should_show: null,
    is_before: null,
    xreplace: {
      '{d}': GAAD_DATE.toString('dd'),
      '{th}': GAAD_DATE.toString('S'),
      '{m}': GAAD_DATE.toString('MMMM'),
      '{y}': GAAD_DATE.toString('yyyy')
    },
    date: GAAD_DATE,
    date_next: GAAD_NEXT,
    // Was: datefmt: GAAD_DATE.toString('MMMM dS, yyyy'),
    today: Date.today(),
    xth: Date.today().toString('yyyy') - 2011,
    debug: /[?&]debug=1/.test(location.search),
    force: /[?&]gaadwidget=force/i.test(location.search)
  };

  var gaad = getConfig(defaults);

  gaad.show_date = new Date(GAAD_DATE).addDays(-gaad.days_before); // Clone.
  gaad.hide_date = new Date(GAAD_DATE).addDays(gaad.days_after);

  // gaad.diff_days = gaad.today.toString('dd') - gaad.show_date.toString('dd');
  gaad.diff_show = gaad.today - gaad.show_date;
  gaad.diff_hide = gaad.today - gaad.hide_date;

  gaad.should_show = (gaad.diff_show >= 0 && gaad.diff_hide < 0);

  gaad.is_before = (gaad.today - gaad.date) < 0;

  if (!gaad.is_before) {
    gaad.xreplace = {
      '{d}': GAAD_NEXT.toString('dd'),
      '{th}': GAAD_NEXT.toString('S'),
      '{m}': GAAD_NEXT.toString('MMMM'),
      '{y}': GAAD_NEXT.toString('yyyy')
    };
  }

  gaad.xreplace[ '{at}' ] = replaceObj(' href="{u}" target="_top"', { '{u}': gaad.url });
  gaad.xreplace[ '{x}' ] = gaad.xth;
  gaad.xreplace[ '{g}' ] = gaad.texts.en.name;

  var lang = gaad.texts[ gaad.lang ] ? gaad.lang : 'en';
  var template = gaad.is_before ? gaad.texts[ lang ].before : gaad.texts[ lang ].after;

  gaad.join = replaceObj(template, gaad.xreplace);

  if (!gaad.should_show && !gaad.force) {
    return gaad.log('GAAD: no-show', gaad);
  }

  gaad.log('GAAD: show', gaad);

  addStylesheet(gaad.script_url + gaad.style_url);

  setHTML(gaad);

  W.console && console.log('Happy GAAD! ~ http://globalaccessibilityawarenessday.org');

  // ------------------------------------

  function getConfig (defaults) {
    var scriptEl = D.querySelector('script[ src *= "' + defaults.script + '" ]');

    var data = scriptEl.getAttribute('data-gaad');
    var options = data ? JSON.parse(data) : {};

    var gaad = extend(defaults, options);

    gaad.log = gaad.debug && W.console ? console.warn : function () {};

    gaad.script_url = scriptEl.src;
    return gaad;
  }

  // JuhQ (16 July 2015): https://gist.github.com/pbojinov/8f3765b672efec122f66#gistcomment-1493930
  function extend () {
    var extended = {};
    var key;
    var prop;

    for (key in arguments) {
      var argument = arguments[ key ];
      for (prop in argument) {
        if (Object.prototype.hasOwnProperty.call(argument, prop)) {
          extended[ prop ] = argument[ prop ];
        }
      }
    }
    return extended;
  }

  // Ben McCormick (24 March 2013), SirDerpington:
  // http://stackoverflow.com/questions/15604140/replace-multiple-strings-with-multiple-other-strings
  function replaceObj (str, mapObj) {
    var re = new RegExp(Object.keys(mapObj).join('|'), 'g'); // Was: "gi".

    return str.replace(re, function (matched) {
      return mapObj[ matched ]; // Was: matched.toLowerCase().
    });
  }

  function setHTML (gaad) {
    var elem = D.getElementById(gaad.id);

    elem.lang = gaad.lang;
    elem.dir = gaad.dir;
    elem.setAttribute('role', 'alert');
    elem.className = replaceObj('gaad-widget-js {t} {e}', { '{t}': gaad.theme, '{e}': gaad.embed ? 'embed' : 'no-embed' });
    elem.innerHTML = gaad.join;
  }

  function addStylesheet (url) {
    var styleEl = D.createElement('link');
    styleEl.rel = 'stylesheet';
    styleEl.type = 'text/css';
    styleEl.href = url;

    /* var styleEl = D.createElement('style');
    styleEl.id = gaad.id + '-css';
    styleEl.innerText = gaad.css.join('\n'); */

    D.head.appendChild(styleEl);
  }
})(window, window.document, window.location, window.console, window.Date);
