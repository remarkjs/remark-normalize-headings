'use strict';

var normalizeHeadings = require('..');

var test = require('tape'),
    mdast = require('mdast');

var fs = require('fs'),
    path = require('path');


test.Test.prototype.check = function (test, message) {
  var load = function (ext) {
    var filename = path.join(__dirname, test + ext);
    var markdown = fs.readFileSync(filename, { encoding: 'utf8' });
    return mdast.parse(markdown, { position: false });
  };

  var input = load('.in');
  var output = load('.out');

  this.deepEqual(normalizeHeadings(input), output, message);
};


test(function (t) {
  t.check('no-headings', 'No-op if there is no top-level headings');
  t.check('one-heading', 'No-op if there is a single top-level heading');
  t.check('two-headings', 'Makes the second header one level deeper');
  t.check('more-headings', 'Shifts all other headings one level deeper');
  t.end();
});
