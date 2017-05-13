/*!
  GAAD.widget.js | ©Nick Freear 2017-04-27 | License: MIT | This is not an official widget!

  https://gist.github.com/nfreear/eef4be96147cb5c1182cbc9e595f2833
*/

(function (W, D, C) {
  'use strict';

  var Date = W.Date;

  if (typeof Date.today !== 'function') {
    return C.error('GAAD error: missing dependency, "Datejs"');
  }

  //const CONST = 5;
  var GAAD_DATE = Date.may().third().thursday();

  var defaults = {
     id:      'id-gaad',
     script:  'GAAD.widget.js',
     lang:    'en',
     url:     'http://globalaccessibilityawarenessday.org/',
     date:    GAAD_DATE,
     datefmt: GAAD_DATE.toString('MMMM dS, yyyy'),
     days_before: 10,
     days_after:  5,
     today:   Date.today(),
     should_show: null,
     xth:     Date.today().toString('yyyy') - 2011,
     join_tpl:'Join us on Thursday %D and mark the %xth <a href="%U">Global Accessibility Awareness Day (GAAD)</a>.',
     css: [
       '#id-gaad {',
       '  background: #00385E;',
       '  border: 3px solid #f8c958;',
       '  border-radius: 5px;',
       '  color: #fff;',
       '  display: block;',
       '  font: 1.2em "Helvetica Neue", Helvetica, Arial, sans-serif;',
       '  margin: 1em;',
       '  padding: 20px;',
       '  text-align: center;',
       '}',
       '#id-gaad a { color: #fff; text-decoration: underline; }'
     ]
  };

  var scriptEl = D.querySelector('script[ src *= "' + defaults.script + '" ]');
  var data = scriptEl.getAttribute('data-gaad');
  var options = data ? JSON.parse(data) : {};

  C.warn(scriptEl, options); // Not: scriptEl.dataset

  var gaad = extend(defaults, options);

  gaad.show_date = new Date(GAAD_DATE).addDays(-gaad.days_before); // Clone.
  gaad.hide_date = new Date(GAAD_DATE).addDays(gaad.days_after);

  //gaad.diff_days = gaad.today.toString('dd') - gaad.show_date.toString('dd');
  gaad.diff_show = gaad.today - gaad.show_date;
  gaad.diff_hide = gaad.today - gaad.hide_date;

  gaad.should_show = ( gaad.diff_show >= 0 && gaad.diff_hide < 0 );

  gaad.join = gaad.join_tpl.replace(/%D/, gaad.datefmt).replace(/%x/, gaad.xth).replace(/%U/, gaad.url);

  if (! gaad.should_show) {
    return C.warn('GAAD: no-show', gaad);
  } else {
    C.warn('GAAD: show', gaad);
  }

  var styleEl = D.createElement('style');
  styleEl.id = gaad.id + '-css';
  styleEl.innerText = gaad.css.join('\n');

  var elem = D.getElementById(gaad.id);

  elem.lang = gaad.lang;
  elem.setAttribute('role', 'alert');
  elem.innerHTML = gaad.join;

  D.head.appendChild(styleEl);

  // ---------------------------
  // JuhQ: https://gist.github.com/pbojinov/8f3765b672efec122f66#gistcomment-1493930

  function extend() {
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
  };

})(window, window.document, window.console);


/* <!doctype>

<div id="id-gaad"></div>


<script src="https://rawgit.com/datejs/Datejs/master/build/date.js"></script>
<script src="GAAD.widget.js" data-gaad='{ "days_before": 5 }'></script>
*/
