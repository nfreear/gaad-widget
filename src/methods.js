
// Functions: extend, setHTML, addStylesheet.. | ©Nick Freear.

var W = window;
var D = W.document;
var CFG;

module.exports = {

  getConfig: function (defaults, methods) {
    var scriptEl = D.querySelector('script[ data-gaad-widget ]'); // Was: ..('script[ src *= "' + defaults.script + '" ]');

    var data = scriptEl.getAttribute('data-gaad-widget');
    var options = data ? JSON.parse(data) : {};

    var gaad = methods.extend(defaults, options);

    gaad.log = gaad.debug && W.console ? console.warn : function () {};

    gaad.script_url = scriptEl.src;

    CFG = gaad;

    return gaad;
  },

  addDays: function (dateObj, days) {
    return dateObj.ts + (days * 24 * 60 * 60 * 1000); // Milliseconds.
  },

  // JuhQ (16 July 2015): https://gist.github.com/pbojinov/8f3765b672efec122f66#gistcomment-1493930
  extend: function () {
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
  },

  trans: function (msgid, vars) {
    var texts = CFG.texts;
    var msgstr = texts[ CFG.lang ][ msgid ] || texts[ 'en' ][ msgid ];
    return msgstr; // replaceObj( msgstr, vars );
  },

  // Ben McCormick (24 March 2013), SirDerpington:
  // http://stackoverflow.com/questions/15604140/replace-multiple-strings-with-multiple-other-strings
  replaceObj: replaceObj,

  setHTML: function (gaad) {
    var elem = D.getElementById(gaad.id);

    elem.lang = gaad.lang;
    elem.dir = gaad.dir;
    elem.setAttribute('role', 'alert');
    elem.className = replaceObj('gaad-widget-js {t} {e}', { '{t}': gaad.theme, '{e}': gaad.embed ? 'embed' : 'no-embed' });
    elem.innerHTML = gaad.message;  // Was: 'gaad.join'
  },

  addStylesheet: function (gaad) {
    var styleEl = D.createElement('link');
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
  var re = new RegExp(Object.keys(mapObj).join('|'), 'g'); // Was: "gi".

  return str.replace(re, function (matched) {
    return mapObj[ matched ]; // Was: matched.toLowerCase().
  });
}
