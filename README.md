[![Build status — Travis-CI][travis-icon]][travis]
[![js-semistandard-style][semi-icon]][semi]
[![GAAD-widget on Npmjs][npm-icon]][npm]
[![License][license-icon]][mit]
[![Total downloads ~ NPMJS.com][downl-icon]][npm]
[![Size of Javascript][size-icon]][build]
<!--[![Browserify][built-icon]][gh]-->


# nfreear/gaad-widget

Display a banner-link to promote [Global Accessibility Awareness Day (GAAD)][gaad].
The banner displays for a configurable period before and after the day.

[![Global Accessibility Awareness Day][gaad-image]][gaad]

> Join us on Thursday, May 18 2017 and mark the sixth Global Accessibility Awareness Day (GAAD).
> The purpose of GAAD is to get everyone talking, thinking and learning about digital
> (web, software, mobile, etc.) access/inclusion and people with different disabilities.

Read the [blog post][blog]. Built on [Datejs][].

_Note ~ this is not an official widget!_

[Original Gist][gist].

## Features

### v3.x

* Adopted Browserify,
* Switch from `Datejs` include, to a lookup of JSON embedded in the Javascript,
  * Reduces Javascript file size from 55 to 7.8 kilobytes.

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

[Wishlist][].

## Install and test

```sh
npm i gaad-widget
npm run build
npm test
```

## Usage

Via [unpkg][] - production CDN:

```html
<div id="id-gaad"></div>

<script src="https://unpkg.com/gaad-widget@3.0.0-beta#._.js"></script>
```

Via [RawGit][] - production CDN:

```html
<div id="id-gaad"></div>

<script src="https://cdn.rawgit.com/nfreear/gaad-widget/3.0.0-beta/build/gaad-widget.js"></script>
```

Local hosting:

```html
<div id="id-gaad"></div>

<script src="build/gaad-widget.js" ></script>
```

Setting the `days_before` option:

```html
<div id="id-gaad"></div>

<script src="build/gaad-widget.js" data-gaad='{ "days_before": 20 }'></script>
```

Setting several configuration options:

```html
<div id="custom_id"></div>

<script
  src="build/gaad-widget.js"
  data-gaad='{ "id": "custom_id", "days_after": 10, "theme": "black", "debug": true }'
  ></script>
```

## Translation

[Translations][i18n-code], [#4][i18n].

Français (French):

```html
<div id="id-gaad"></div>

<script src="build/gaad-widget.js" data-gaad='{ "lang": "fr" }' ></script>
```

## WordPress

A [plugin for WordPress][wp].

## License

License: [MIT][].

Twitter: [@nfreear][], [@gbla11yday][].


[blog]: http://nick.freear.org.uk/2017/05/14/gaad-widget.html?utm_source=readme
[GAAD]: http://globalaccessibilityawarenessday.org/?utm_source=github&utm_campaign=gaad-widget
[@gbla11yday]: https://twitter.com/gbla11yday
[@nfreear]: https://twitter.com/nfreear
[@srinivasu..]: http://srinivasu.org "Suggested by @srinivasuchakravarthula"
[gaad-widget]: https://github.com/nfreear/gaad-widget
[gaad-image]: https://github.com/nfreear/gaad-widget/raw/master/style/gaad-widget.png
[wishlist]: https://github.com/nfreear/gaad-widget/issues/2#!-Wishlist "Bug #2, Wishlist"
[i18n]: https://github.com/nfreear/gaad-widget/issues/4 "Bug #4, Translations (v 2.x)"
[i18n-code]: https://github.com/nfreear/gaad-widget/tree/master/locales "Translations, JSON format"
[b/a]: https://github.com/nfreear/gaad-widget/issues/5 "Bug #5, Separate before and after messages (v 2.x)"
[ie]: https://github.com/nfreear/gaad-widget/issues/3#!-MSIE-9-11 "Bug #3, Browser compatibility"
[gist]: https://gist.github.com/nfreear/eef4be96147cb5c1182cbc9e595f2833
[wp]: https://gist.github.com/nfreear/e5520adbb930e537ef5fe2e0aab231d1 "WordPress plugin (PHP)"
[Datejs]: https://github.com/datejs/Datejs
[RawGit]: https://rawgit.com/
    "RawGit serves Git files with the correct mime-type; a content delivery network (CDN)"
[unpkg]: https://unpkg.com/ "unpkg is a fast content delivery network for everything on npm"
[MIT]: https://nfreear.mit-license.org/2017#!-gaad-widget "MIT License | © Nick Freear, 2017-04-27"
[travis]: https://travis-ci.org/nfreear/gaad-widget
[travis-icon]: https://api.travis-ci.org/nfreear/gaad-widget.svg
    "Build status – Travis-CI (NPM/eslint)"
[semi]: https://github.com/Flet/semistandard
[semi-icon]: https://img.shields.io/badge/code%20style-semistandard-brightgreen.svg?style=flat-square
    "Javascript coding style — 'semistandard'"
[npm]: https://npmjs.com/package/gaad-widget
[npm-icon]: https://img.shields.io/npm/v/gaad-widget.svg
[license-icon]: https://img.shields.io/npm/l/gaad-widget.svg
[downl-icon]: https://img.shields.io/npm/dt/gaad-widget.svg "Count of total downloads ~NPM"
[size-icon]: https://img.shields.io/github/size/nfreear/gaad-widget/build/gaad-widget.js.svg
    "Size of built Javascript, kilo-Bytes ~ on GitHub"
[built-icon]: https://img.shields.io/badge/built_with-browserify-blue.svg
    "Built with Browserify"
[build]: https://github.com/nfreear/gaad-widget/tree/3.x/build

[End]: //.
