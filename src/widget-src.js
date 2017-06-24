
// Main widget 'run' function | ©Nick Freear.

var W = window;
// var Date = W.Date;

module.exports.run = function (defaults, methods) {
  'use strict';

  var gaad = methods.getConfig(defaults, methods);

  var GAAD_DATE = gaad.date;
  var GAAD_NEXT = gaad.date_next;

  gaad.show_date = methods.addDays(GAAD_DATE, -gaad.days_before); // new Date(GAAD_DATE).addDays(-gaad.days_before); // Clone.
  gaad.hide_date = methods.addDays(GAAD_DATE, gaad.days_after); // new Date(GAAD_DATE).addDays(gaad.days_after);

  // gaad.diff_days = gaad.today.toString('dd') - gaad.show_date.toString('dd');
  gaad.diff_show = gaad.today - gaad.show_date;
  gaad.diff_hide = gaad.today - gaad.hide_date;

  gaad.should_show = (gaad.diff_show >= 0 && gaad.diff_hide < 0);

  gaad.is_before = (gaad.today - gaad.date) < 0;

  if (!gaad.is_before) {
    gaad.xreplace = GAAD_NEXT;
  }

  gaad.xreplace[ '{at}' ] = methods.replaceObj(' href="{u}" target="_top"', { '{u}': gaad.url });
  gaad.xreplace[ '{x}' ] = gaad.xth;
  gaad.xreplace[ '{g}' ] = gaad.texts.en.name;

  var lang = gaad.texts[ gaad.lang ] ? gaad.lang : 'en';
  var template = gaad.is_before ? gaad.texts[ lang ].before : gaad.texts[ lang ].after;

  gaad.join = methods.replaceObj(template, gaad.xreplace);

  if (!gaad.should_show && !gaad.force) {
    return gaad.log('GAAD: no-show', gaad);
  }

  gaad.log('GAAD: show', gaad);

  methods.addStylesheet(gaad.script_url + gaad.style_url);

  methods.setHTML(gaad);

  W.console && console.log('Happy GAAD! ~ http://globalaccessibilityawarenessday.org');

  return gaad;
};
