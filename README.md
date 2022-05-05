[![Node.js CI][ci-img]][ci]
<!-- [![Build status — Travis-CI][travis-icon]][travis] -->
[![GitLab pipeline status][gitlab-icon]][gitlab]
[![js-semistandard-style][semi-icon]][semi]
[![GAAD-widget - on Npmjs][npm-icon]][npm]
[![License][license-icon]][mit]
[![Total downloads - on NPMJS][downl-icon]][npm]
[![Size of Javascript][size-icon]][build]
[![Vulnerability test][snyk-icon]][snyk]
[![Accessibility test - GAAD passes][pa11y-icon]][pa11y-ci]
[![gaad-widget - on UNPKG][unpkg-icon]][browse]
<!--[![Browserify][built-icon]][gh]-->


# gaad-widget

Display a banner-link to promote [Global Accessibility Awareness Day (GAAD)][gaad].
The banner displays for a configurable period before and after the day,
and the emphasis is on easy site-integration, via a [CDN][unpkg].

[![Global Accessibility Awareness Day][gaad-img-after]][gaad]

> Join us on Thursday, May 16 2019 and mark the eighth Global Accessibility Awareness Day (GAAD).
> The purpose of GAAD is to get everyone talking, thinking and learning about digital
> (web, software, mobile, etc.) access/inclusion and people with different disabilities.

Read the [blog post][blog]. Built on [Datejs][] ([API][datejs-api]).

_Note ~ this is not an official widget!_

[Original Gist][gist].

## Release notes
### Features

 * See the [CHANGELOG][].
 * Download on the [releases page][rel]. (Also, see the [wishlist][].)

## Install and test

```sh
npm i gaad-widget
npm run build
npm test
```

## Usage

Via [unpkg][] — [browse][] — production CDN:

```html
<div id="id-gaad-widget"></div>

<script src="https://unpkg.com/gaad-widget@^3#"></script>
```

Via [RawGit][] — production CDN (_deprecated_):

```html
<div id="id-gaad-widget"></div>

<script src="https://cdn.rawgit.com/nfreear/gaad-widget/3.4.0/dist/gaad-widget.js"></script>
```

Local hosting:

```html
<div id="id-gaad-widget"></div>

<script src="dist/gaad-widget.js" ></script>
```

See the list of [default configuration options][cfg].

Setting the `days_before` option:

```html
<div id="id-gaad-widget"></div>

<script src="dist/gaad-widget.js" data-gaad-widget='{ "days_before": 20 }'></script>
```

Setting several configuration options:

```html
<div id="custom_id"></div>

<script
  src="dist/gaad-widget.js"
  data-gaad-widget='{ "id": "custom_id", "days_after": 10, "theme": "black", "debug": true }'
  ></script>
```

## Analytics

Anonymous usage statistics via Google Analytics is being added for version `3.2+` (`> 3.1.0`). It will be [enabled][analytics] by default, and can be disabled thus:

```html
<div id="id-gaad-widget"></div>

<script src="dist/gaad-widget.js" data-gaad-widget='{ "analytics": null }'></script>
```

## Translation

Please help with translating `gaad-widget` into your language!

 * [Translation information ~ #4][i18n]
 * [Current translations][i18n-code].

Français (French):

```html
<div id="id-gaad-widget"></div>

<script src="dist/gaad-widget.js" data-gaad-widget='{ "lang": "fr" }' ></script>
```

## WordPress

A [plugin for WordPress][wp].

## License

License: [MIT][].

Twitter: [@nfreear][], [@gbla11yday][].

_See the related [isad-widget][]._


[blog]: https://nick.freear.org.uk/2017/05/14/gaad-widget.html?utm_source=readme
[GAAD]: https://globalaccessibilityawarenessday.org/?utm_source=github&utm_campaign=gaad-widget
[@gbla11yday]: https://twitter.com/gbla11yday
[@nfreear]: https://twitter.com/nfreear
[@srinivasu..]: http://srinivasu.org "Suggested by @srinivasuchakravarthula"
[gaad-widget]: https://github.com/nfreear/gaad-widget
[gaad-img-after]: https://github.com/nfreear/gaad-widget/raw/3.x/style/gaad-widget-after.png
[gaad-image]: https://github.com/nfreear/gaad-widget/raw/3.x/style/gaad-widget.png
[changelog]: https://github.com/nfreear/gaad-widget/blob/3.x/CHANGELOG.md
[rel]: https://github.com/nfreear/gaad-widget/releases "Release notes / changelog"
[wishlist]: https://github.com/nfreear/gaad-widget/issues/2#!-Wishlist "Bug #2, Wishlist"
[i18n]: https://github.com/nfreear/gaad-widget/issues/4#!-i18n "Bug #4, Translations (v 2.x)"
[i18n-code]: https://github.com/nfreear/gaad-widget/tree/3.x/locales "Translations, JSON format"
[b/a]: https://github.com/nfreear/gaad-widget/issues/5 "Bug #5, Separate before and after messages (v 2.x)"
[ie]: https://github.com/nfreear/gaad-widget/issues/3#!-MSIE-9-11 "Bug #3, Browser compatibility"
[cfg]: https://github.com/nfreear/gaad-widget/blob/3.x/src/configure.js#L16-L47
    "Default configuration options"
[analytics]: https://github.com/nfreear/gaad-widget/blob/3.x/src/configure.js#L36-L40
    "Analytics configuration, JS code"
[gist]: https://gist.github.com/nfreear/eef4be96147cb5c1182cbc9e595f2833 "Original Gist, 27 April 2017"
[wp]: https://gist.github.com/nfreear/e5520adbb930e537ef5fe2e0aab231d1 "WordPress plugin (PHP)"
[Datejs]: https://npmjs.com/package/datejs "Thanks: @abritinthebay"
[Datejs-api]: https://github.com/datejs/Datejs#example-usage "API only (legacy code-base)"
[RawGit]: https://rawgit.com/
    "RawGit serves Git files with the correct mime-type; a content delivery network (CDN)"
[unpkg]: https://unpkg.com/ "unpkg is a fast content delivery network (CDN) for everything on npm"
[unpkg-icon]: https://nick.freear.org.uk/badge/unpkg.svg
[browse]: https://unpkg.com/gaad-widget@^3/ "Browse the most recent version on Unpkg.com"
[MIT]: https://nfreear.mit-license.org/2017-2019#!-gaad-widget "MIT License | © Nick Freear, 2017-04-27, 2018"
[mit-txt]: https://nfreear.mit-license.org/2017-2019/license.txt "MIT License | © Nick Freear"
[travis]: https://travis-ci.org/nfreear/gaad-widget
[travis-icon]: https://api.travis-ci.org/nfreear/gaad-widget.svg
    "Build status – Travis-CI (NPM/eslint)"
[semi]: https://github.com/Flet/semistandard
[semi-icon]: https://nick.freear.org.uk/badge/semi.svg "Javascript coding style — semistandard"
[sem-i0]: https://img.shields.io/badge/code_style-semistandard-brightgreen.svg?_style=flat-square
[npm]: https://npmjs.com/package/gaad-widget
[npm-icon]: https://badge.fury.io/js/gaad-widget.svg
[npm-i0]: https://img.shields.io/npm/v/gaad-widget.svg
[license-icon]: https://nick.freear.org.uk/badge/mit.svg
[license-i0]: https://img.shields.io/npm/l/gaad-widget.svg
[downl-icon]: https://img.shields.io/npm/dt/gaad-widget.svg "Count of total downloads ~NPM"
[size-i0]: http://img.badgesize.io/nfreear/gaad-widget/blob/3.x/dist/gaad-widget.js.svg?color=yellow
[size-icon]: https://img.shields.io/github/size/nfreear/gaad-widget/dist/gaad-widget.js.svg
    "Size of built Javascript, kilo-bytes (kB) ~ on GitHub"
[built-icon]: https://nick.freear.org.uk/badge/browserify.svg "Built with Browserify"
[built-i0]: https://img.shields.io/badge/built_with-browserify-blue.svg
[build]: https://github.com/nfreear/gaad-widget/tree/3.x/dist
[Browserify]: http://browserify.org/
    "Browserify lets you require('modules') in the browser by bundling your dependencies."
[snyk]: https://snyk.io/test/npm/gaad-widget "Vulnerability count ~ via Snyk"
[snyk-icon]: https://snyk.io/test/npm/gaad-widget/badge.svg
[pa11y-ci]: https://github.com/pa11y/pa11y-ci
    "Automated accessibility testing - via 'pa11y-ci'"
[pa11y-icon]: https://nick.freear.org.uk/badge/pa11y-ci.svg
[pa11y-i0]: https://img.shields.io/badge/accessibility-pa11y--ci-blue.svg
[wcag-icon]: https://img.shields.io/badge/accessibility-WCAG_2.0_AAA-green.svg
[gitlab-icon]: https://gitlab.com/nfreear/gaad-widget/badges/3.x/pipeline.svg
[gitlab-co]: https://gitlab.com/nfreear/gaad-widget/commits/3.x
[gitlab]: https://gitlab.com/nfreear/gaad-widget/pipelines "GitLab pipeline status"
[ci-img]: https://github.com/nfreear/gaad-widget/actions/workflows/node.js.yml/badge.svg
[ci]: https://github.com/nfreear/gaad-widget/actions/workflows/node.js.yml

[isad-widget]: https://github.com/nfreear/isad-widget
    "banner-link for International Stuttering Awareness Day (ISAD)"

[End]: //.
