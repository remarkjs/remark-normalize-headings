'use strict';

var normalizeHeadings = require('..');

var test = require('tape'),
    remark = require('remark');

var fs = require('fs'),
    path = require('path');


var load = function (filename) {
  filename = path.join(__dirname, filename);
  var markdown = fs.readFileSync(filename, { encoding: 'utf8' });
  return remark().data('settings', { position: false }).parse(markdown);
};


test(function (t) {
  var input = load('hierarchy.in');
  var output = load('hierarchy.out');

  t.deepEqual(remark().use(normalizeHeadings).runSync(input), output);
  t.end();
});
