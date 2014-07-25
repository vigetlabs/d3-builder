var browserify = require('browserify');
var d3ify      = require('../index');
var out        = require('fs').createWriteStream('./test/out.js');
var path       = require('path');

browserify()
.require(d3ify('svg/arc'), {
	expose: 'd3'
})
.add('./test/sample.js')
.bundle()
.pipe(out);
