[![Build status — Travis-CI][travis-icon]][travis]
[![js-semistandard-style][semi-icon]][semi]


# nfreear/gaad-widget

Display a banner-link to promote [Global Accessibility Awareness Day (GAAD)][gaad].
The banner displays for a configurable period before and after the day.

[![Global Accessibility Awareness Day][gaad-image]][gaad]

> Join us on Thursday, May 18 2017 and mark the sixth Global Accessibility Awareness Day (GAAD).
> The purpose of GAAD is to get everyone talking, thinking and learning about digital
> (web, software, mobile, etc.) access/inclusion and people with different disabilities.

Built on [Datejs][].

Note ~ this is not an official widget!

[Original Gist][gist].

## Features

* Zero configuration required by default,
* Paste and forget - the banner appears _10_ days before and disappears _5_ days after,
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
npm install
npm run build
npm run build-min
npm test
```

## Usage

Via [RawGit][] - production / CDN:

```html
<div id="id-gaad"></div>

<script src="https://cdn.rawgit.com/nfreear/gaad-widget/1.0-beta.2/build/GAAD.widget.js"></script>
```

Local hosting:

```html
<div id="id-gaad"></div>

<script src="build/GAAD.widget.js" ></script>
```

Setting the `days_before` option:

```html
<div id="id-gaad"></div>

<script src="build/GAAD.widget.js" data-gaad='{ "days_before": 20 }'></script>
```

Setting several configuration options:

```html
<div id="custom_id"></div>

<script
  src="build/GAAD.widget.js"
  data-gaad=
  '{ "id": "custom_id", "days_before": 20, "days_after": 8, "url": "http://globalaccessibilityawarenessday.org/" }'
  ></script>
```

## Translation

Français (French):

```html
<div id="id-gaad"></div>

<script
  src="build/GAAD.widget.js"
  data-gaad=
  '{ "lang": "fr", "template": "Rejoignez-nous le jeudi 18 mai 2017 et marquer le %xème <a href=\"%U\">Global Accessibility Awareness Day (GAAD)</a>." }'
  ></script>
```

## License

License: [MIT][].

Twitter: [@nfreear][].


[GAAD]: http://globalaccessibilityawarenessday.org/?utm_source=github&utm_campaign=gaad-widget
[@gbla11yday]: https://twitter.com/gbla11yday
[@nfreear]: https://twitter.com/nfreear
[gaad-widget]: https://github.com/nfreear/gaad-widget
[gaad-image]: https://github.com/nfreear/gaad-widget/raw/master/style/GAAD.widget.png
[wishlist]: https://github.com/nfreear/gaad-widget/issues/2#!-Wishlist "Wishlist"
[ie]: https://github.com/nfreear/gaad-widget/issues/3#!-MSIE-9-11 "Browser compatibility"
[gist]: https://gist.github.com/nfreear/eef4be96147cb5c1182cbc9e595f2833
[Datejs]: https://github.com/datejs/Datejs
[RawGit]: https://rawgit.com/
    "Serves Git files with the correct mime-type; content delivery network (CDN)"
[MIT]: https://nfreear.mit-license.org/ "MIT License"
[travis]: https://travis-ci.org/nfreear/gaad-widget
[travis-icon]: https://api.travis-ci.org/nfreear/gaad-widget.svg
    "Build status – Travis-CI (NPM/eslint)"
[semi]: https://github.com/Flet/semistandard
[semi-icon]: https://img.shields.io/badge/code%20style-semistandard-brightgreen.svg?style=flat-square
    "Javascript coding style — 'semistandard'"
