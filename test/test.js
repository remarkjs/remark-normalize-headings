'use strict';

var normalizeHeadings = require('..');

var test = require('tape'),
    mdast = require('mdast');

var fs = require('fs'),
    path = require('path');


test.Test.prototype.check = function (test, message) {
  var load = function (ext) {
    var filename = path.join(__dirname, test + ext);
    return fs.readFileSync(filename, { encoding: 'utf8' });
  };

  var input = mdast.parse(load('.in'));
  var output = mdast.parse(load('.out'));

  this.deepEqual(normalizeHeadings(input), output, message);
};


test(function (t) {
  t.check('two-headings', 'Makes the second header one level deeper');
  t.end();
});
