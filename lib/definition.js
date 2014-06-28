'use strict';
/* global module, require */
var ResultIterator = require('./iterator'),
	parse = require('./parse');

function Definition(options) {
	this._options = options = options || {};
	// TODO: firstChild, nextSibling, children, parent
	// id, classes, attributes, pseudo classes, pseudo element
}

Definition.prototype.querySelector = function (root, selector) {
	var next = new ResultIterator(this, root, parse(selector)).next();
	return !next.done && next.value;
};

Definition.prototype.querySelectorIteratively = function (root, selector) {
	return new ResultIterator(this, root, parse(selector));
};

Definition.prototype.querySelectorAll = function (root, selector) {
	var array = [];
	for (var next, iterator = new ResultIterator(this, root, parse(selector)); 
		(next = iterator.next()) && !next.done;)
		array.push(next.value);
	return array;
};

module.exports = Definition;
