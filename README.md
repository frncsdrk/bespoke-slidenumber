[![Build Status](https://secure.travis-ci.org/frncsdrk/bespoke-slidenumber.png?branch=master)](https://travis-ci.org/frncsdrk/bespoke-slidenumber) [![Coverage Status](https://coveralls.io/repos/frncsdrk/bespoke-slidenumber/badge.png)](https://coveralls.io/r/frncsdrk/bespoke-slidenumber)

# bespoke-slidenumber

displays current and overall slide number

## Download

Download the [production version][min] or the [development version][max], or use a [package manager](#package-managers).

[min]: https://raw.github.com/frncsdrk/bespoke-slidenumber/master/dist/bespoke-slidenumber.min.js
[max]: https://raw.github.com/frncsdrk/bespoke-slidenumber/master/dist/bespoke-slidenumber.js

## Usage

This plugin is shipped in a [UMD format](https://github.com/umdjs/umd), meaning that it is available as a CommonJS/AMD module or browser global.

For example, when using CommonJS modules:

```js
var bespoke = require('bespoke'),
  slidenumber = require('bespoke-slidenumber');

bespoke.from('#presentation', [
  slidenumber()
]);
```

When using browser globals:

```js
bespoke.from('#presentation', [
  bespoke.plugins.slidenumber()
]);
```

### Custom Divider

When using CommonJS modules:

```js
bespoke.from('#presentation', [
  slidenumber('/')
]);
```

When using browser globals:

```js
bespoke.from('#presentation', [
  bespoke.plugins.slidenumber('/')
]);
```

### CSS Classes
| Class                       | Purpose                |
|-----------------------------|------------------------|
| bespoke-slidenumber         | slidenumber container  |
| bespoke-slidenumber-no      | numbers                |
| bespoke-sidenumber-current  | current slide number   |
| bespoke-slidenumber-overall | overall slide number   |
| bespoke-slidenumber-divider | custom divider, if any |

## Package managers

### npm

```bash
$ npm install bespoke-slidenumber
```

### Bower

```bash
$ bower install bespoke-slidenumber
```

## Credits

This plugin was built with [generator-bespokeplugin](https://github.com/markdalgleish/generator-bespokeplugin).

## License

[MIT License](http://en.wikipedia.org/wiki/MIT_License)
