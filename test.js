var browserify = require('browserify');
var d3ify      = require('./index');
var out        = require('fs').createWriteStream('./out.js');
var path       = require('path');

browserify({
	entries: ['./sample.js']
})
.require(d3ify('svg/arc'), {
	basedir: path.resolve(__dirname, 'node_modules', 'd3', 'src'),
	entry: false,
	expose: 'foo'
})
.bundle({ debug: false })
.pipe(out);
