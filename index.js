var browserify = require('browserify');
var path       = require('path');
var smash      = require('smash');

module.exports = function() {
	var modules = Array.prototype.slice.call(arguments, 2);

	modules.unshift('start');
	modules.push('end');

	var resolved = modules.map(function(location) {
		return path.resolve('node_modules','d3', 'src', location);
	});

	return smash(resolved);
};
