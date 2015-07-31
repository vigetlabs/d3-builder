var path  = require('path');
var smash = require('smash');

module.exports = function() {
	var modules = Array.prototype.slice.apply(arguments);

	modules.unshift('start');
	modules.push('end');

	var d3Path = path.dirname(require.resolve('d3'));

	var resolved = modules.map(function(location) {
		return path.resolve(d3Path, 'src', location);
	});

	return smash(resolved);
};
