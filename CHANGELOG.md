
[![Build status — Travis-CI][travis-icon]][travis]

# gaad-widget changelog

← [README][]

 * Download on the [releases page][rel]. (Also, see the [wishlist][].)

## Version 3.2.1

 * _Date:  ~ May 2018_
 * _Tag:   3.2.1_
 * Fix — Javascript selector for configuration — `script[ data-gaad-widget ]` (for WordPress etc.!), #11;
 * Fix — switch `font-size` in the CSS stylesheet from `em` to `rem`;
 * Fix — switch `url` field in locale JSON from `.html` to `.php`;
 * Fix — adopt _proper_ release of `node-analytics-ga` package;
 * Fix — make URL parameters like `?gaadwidget=force` more flexible (allow and `?..` and `#..`)
 * Add [Gitlab CI][] test;
 * Integration — [WordPress][wp] ([E-Access Bulletin][eab]);
 * Integration — [CloudEngine][ce] ([Cloudworks][cw]);

## Version 3.2.0

 * _Date:  30 April 2018_
 * _Tag:   3.2.0_
 * Incorrect message bug - logic bug (see screenshot) #10;
 * Add a "_Put gaad-widget on your site_" link ([arrow][]);
 * Display language-specific GAAD string, not English — bug/enhancement;
 * Re-factor language/ locale/ translation/ i18n code, #4;
 * Initial Chinese, Simplified translation, #4;
 * Initial Spanish translation, #4;
 * Automated accessibility testing, via [pa11y-ci][] and `live-server`, #9;
 * Cast strings to integers in JSON — `parseInt()`;
 * Adopt `lessc` to build a LESS stylesheet;
 * Added [GitLab CI][] integration;
 * Google Analytics via `node-analytics-ga`, can be disabled (see [README][]).

## Version 3.1.0 (Beta)

 * _Date:  1 July 2017_
 * _Tag:   3.1.0-beta_
 * Adopted [Browserify][],
 * Switch from `Datejs` include, to a lookup of JSON embedded in the Javascript,
    * Reduces Javascript file size from 55 to ~8 kilobytes 💓
 * Renamed Javascript, CSS etc. `build/GAAD.widget.js` &rarr; `build/gaad-widget.js`
 * Renamed default HTML `id=".."` from `id-gaad` → `id-gaad-widget` (plus, `data-` attribute)

### v2.1

 * Added `?gaadwidget=force` URL parameter, [#2][wishlist]
 * Added iCal and JSON data files.

### v2.0

 * Different after-event message - containing next year's date, [#5][b/a] - thanks [@srinivasu..][]
 * Added translation into Français/French, [#4][i18n]
 * Added neutral `black` theme, [#2][wishlist]
 * Changed default `days_after` from 5 to 10.

### v1.x

 * Zero configuration required by default,
 * Paste and forget - the banner appears _10_ days before and disappears _10_ days after,
 * Configurable,
 * Basic internationalization,
 * Basic automated testing in place (Travis-CI),
 * Accessible ~ _let me know if you spot a problem!_
 * Responsive design,
 * Compatible with [all modern browsers, and MSIE 9-11][ie],
 * CDN courtesy of [RawGit][] (thank you!) - with HTTPS/SSL.

## Version 1.0 (Alpha)

 * _Date:  15 May 2017_
 * _Tag:   1.0-alpha_

---

 * Download on the [releases page][rel]. (Also, see the [wishlist][].)

← [README][]


[readme]: https://github.com/nfreear/gaad-widget#readme
[rel]: https://github.com/nfreear/gaad-widget/releases
[wishlist]: https://github.com/nfreear/gaad-widget/issues/2#!-Wishlist
[i18n]: https://github.com/nfreear/gaad-widget/issues/4#!-i18n
[ie]: https://github.com/nfreear/gaad-widget/issues/3#!-MSIE-9-11

[pa11y-ci]: https://github.com/pa11y/pa11y-ci
[browserify]: http://browserify.org/
[@srinivasu..]: http://srinivasu.org/
[arrow]: http://xahlee.info/comp/unicode_arrows.html#!-U-2913
    "U+2913: DOWNWARDS ARROW TO BAR — &#x2913;"
[gitlab ci]: https://gitlab.com/nfreear/gaad-widget/pipelines "GitLab CI"

[travis]: https://travis-ci.org/nfreear/gaad-widget
[travis-icon]: https://api.travis-ci.org/nfreear/gaad-widget.svg
    "Build status – Travis-CI (NPM/eslint)"

[ce]: https://github.com/IET-OU/cloudengine/issues/376 "IET-OU/cloudengine # 376"
[wp]: https://github.com/nfreear/wp-eab-plugins/commit/7509d3612830f5b607982581d91290c52e648d97
    "nfreear/wp-eab-plugins @ 7509d36"
[cw]: http://cloudworks.ac.uk/#!-gaadwidget=force "Cloudworks site"
[eab]: http://www.headstar.com/eablive/?gaadwidget=f "E-Access Bulletin site"

[End]: //.
