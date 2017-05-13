[![Build status — Travis-CI][travis-icon]][travis]
[![js-semistandard-style][semi-icon]][semi]


# nfreear/gaad-widget

Display a banner-link to promote [Global Accessibility Awareness Day (GAAD)][gaad],
for a period before and after the day.

> Join us on Thursday, May 18 2017 and mark the sixth Global Accessibility Awareness Day (GAAD).
> The purpose of GAAD is to get everyone talking, thinking and learning about digital
> (web, software, mobile, etc.) access/inclusion and people with different disabilities.

Note ~ this is not an official widget!

[Original Gist][gist].

## Install and test

```sh
npm install
npm run build
npm test
```

## Usage

```html
<div id="id-gaad"></div>

<script src="build/GAAD.widget.js" data-gaad='{ "days_before": 5 }'></script>
```

## License

License: [MIT][]


[GAAD]: http://globalaccessibilityawarenessday.org/
[@gbla11yday]: https://twitter.com/gbla11yday
[gaad-widget]: https://github.com/nfreear/gaad-widget
[gist]: https://gist.github.com/nfreear/eef4be96147cb5c1182cbc9e595f2833
[Datejs]: https://github.com/datejs/Datejs
[MIT]: https://nfreear.mit-license.org/ "MIT License"
[travis]: https://travis-ci.org/IET-OU/moodle-auth_ouopenid
[travis-icon]: https://api.travis-ci.org/IET-OU/moodle-auth_ouopenid.svg
    "Build status – Travis-CI (PHP + NPM/eslint)"
[semi]: https://github.com/Flet/semistandard
[semi-icon]: https://img.shields.io/badge/code%20style-semistandard-brightgreen.svg?style=flat-square
    "Javascript coding style — 'semistandard'"
