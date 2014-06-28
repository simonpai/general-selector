'use strict';
/* global module */

function ResultIterator(definition, root, query) {
	this.definition = definition;
	this.root = root;
	this.query = query;
	// TODO
}

ResultIterator.prototype.next = function () {
	// TODO
	return {
		done: true
	};
};

ResultIterator.prototype.toArray = function () {
	var array = [];
	for (var next; (next = this.next()) && !next.done;)
		array.push(next.value);
	return array;
};

module.exports = ResultIterator;
