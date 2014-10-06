var path  = require('path');
var smash = require('smash');

module.exports = function() {
	var modules = Array.prototype.slice.apply(arguments);

	modules.unshift('start');
	modules.push('end');

	var resolved = modules.map(function(location) {
		return path.resolve(__dirname, '..', 'd3', 'src', location);
	});

	return smash(resolved);
};
