
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
