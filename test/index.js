var browserify = require('browserify');
var d3ify      = require('../index');
var out        = require('fs').createWriteStream('./test/out.js');
var path       = require('path');

browserify({
	entries: ['./test/sample.js']
})
.require(d3ify('svg/arc'), {
	basedir: '.',
	entry: false,
	expose: 'foo'
})
.bundle({ debug: false })
.pipe(out);
