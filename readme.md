# D3 Builder

A work in progress, but you can currently use it like:

```javascript
var fs = require('fs');
var d3 = require('d3-builder');

d3(['svg/arc', 'scale/linear']).pipe(fs.createWriteStream('./d3.custom.js'));
```

## What modules are available?

Checkout [the D3 source](https://github.com/mbostock/d3/tree/master/src) for a list. `start` and `end` are automatically included for you.

## Motivation

D3 uses the [smash](https://github.com/mbostock/smash) module system. This package is a thin layer over smash and D3 to (eventually) make it easier to stream custom builds into [[browserify](https://github.com/substack/node-browserify).
