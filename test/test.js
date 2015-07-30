'use strict';

var normalizeHeadings = require('../transform'),
    normalizeHeadingsPlugin = require('../plugin');

var test = require('tape'),
    mdast = require('mdast');

var fs = require('fs'),
    path = require('path');


var load = function (filename) {
  filename = path.join(__dirname, filename);
  var markdown = fs.readFileSync(filename, { encoding: 'utf8' });
  return mdast.parse(markdown, { position: false });
};


test.Test.prototype.check = function (test, message) {
  var input = load(test + '.in');
  var output = load(test + '.out');

  this.deepEqual(normalizeHeadings(input), output, message);
};


test('Multiple top-level headings', function (t) {
  t.check('no-headings', 'No-op if there is no top-level headings');
  t.check('one-heading', 'No-op if there is a single top-level heading');
  t.check('two-headings', 'Makes the second header one level deeper');
  t.check('more-headings', 'Shifts all other headings one level deeper');
  t.end();
});


test('Level 7', function (t) {
  t.check('hierarchy', 'There is no depth level 7');
  t.end();
});


test('Plugin', function (t) {
  var input = load('hierarchy.in');
  var output = load('hierarchy.out');

  t.deepEqual(mdast.use(normalizeHeadingsPlugin).run(input), output,
              'Works as a plugin for mdast');
  t.end();
});
