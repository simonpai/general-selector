'use strict';
/* global module, require */
var Definition = require('./lib/definition'),
	parse = require('./lib/parse');

var exports = function (options) { // omit the requirement of "new"
	return new Definition(options);
};

exports.parse = parse;

module.exports = exports;
