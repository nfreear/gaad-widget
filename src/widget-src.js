
// Main widget 'run' function | ©Nick Freear.

var W = window;

module.exports.run = function (defaults, methods) {
  'use strict';

  var gaad = methods.getConfig(defaults, methods);

  var texts = gaad.texts;
  var GAAD_DATE = gaad.date;
  var GAAD_NEXT = gaad.date_next;

  gaad.show_date = methods.addDays(GAAD_DATE, -gaad.days_before); // new Date(GAAD_DATE).addDays(-gaad.days_before); // Clone.
  gaad.hide_date = methods.addDays(GAAD_DATE, gaad.days_after); // new Date(GAAD_DATE).addDays(gaad.days_after);

  // gaad.diff_days = gaad.today.toString('dd') - gaad.show_date.toString('dd');
  gaad.diff_show = gaad.today - gaad.show_date;
  gaad.diff_hide = gaad.today - gaad.hide_date;

  gaad.should_show = (gaad.diff_show >= 0 && gaad.diff_hide < 0);

  gaad.is_before = (gaad.today - gaad.date.ts) < 0; // Use: 'JS Date - timestamp' (implicite cast), works!

  if (!gaad.is_before) {
    gaad.xreplace = GAAD_NEXT;
  }

  gaad.xreplace[ '{at}' ] = methods.replaceObj(' href="{u}" target="_top" title="{t}"', { '{u}': gaad.url, '{t}': texts.en.name });
  gaad.xreplace[ '{x}' ] = gaad.xth;
  // Was: gaad.xreplace[ '{g}' ] = gaad.texts.en.name;

  var lang = texts[ gaad.lang ] ? gaad.lang : 'en';
  gaad.lang = lang;

  var replaceObj = methods.replaceObj;

  var template = gaad.is_before ? texts[ lang ].before : texts[ lang ].after;
  var putWidget = replaceObj(gaad.put_widget, { '{p}': methods.trans('put'), '{c}': gaad.put_char, '{v}': gaad.version });
  var calWidget = replaceObj(gaad.ical_widget, { '{p}': methods.trans('ical'), '{c}': gaad.ical_char, '{v}': gaad.version_hat });

  gaad.xreplace[ '{g}' ] = texts[ lang ].name;
  gaad.message = replaceObj(template, gaad.xreplace) + replaceObj('<div class="w">{p}{c}</div>', { '{c}': calWidget, '{p}': putWidget });

  if (!gaad.should_show && !gaad.force) {
    return gaad.log('GAAD: no-show', gaad);
  }

  gaad.log('GAAD: show', gaad);

  runAnalytics(methods.analytics, gaad.analytics);

  methods.addStylesheet(gaad);

  methods.setHTML(gaad);

  W.console && console.log('Happy GAAD! ~ http://globalaccessibilityawarenessday.org');

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
