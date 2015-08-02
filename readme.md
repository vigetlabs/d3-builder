# Heads up!

Since the time of writing `d3-builder`, [D3 has released discrete packages on
NPM](https://www.npmjs.com/~mbostock). We recommend checking them out before
digging too much into this project.

# D3 Builder

```javascript
var fs = require('fs');
var d3 = require('d3-builder');

d3('svg/arc', 'scale/linear').pipe(fs.createWriteStream('./d3.custom.js'));
```

## What modules are available?

Checkout [the D3 source](https://github.com/mbostock/d3/tree/master/src) for a list. `start` and `end` are automatically included for you.

## Motivation

D3 uses the [smash](https://github.com/mbostock/smash) module system. This package is a thin layer over smash and D3 to make it easier to stream custom builds into [browserify](https://github.com/substack/node-browserify).

## License

`d3-builder` is released under the [MIT License](http://opensource.org/licenses/MIT).
