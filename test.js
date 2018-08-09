'use strict'

var test = require('tape')
var remark = require('remark')
var normalizeHeadings = require('.')

test('remark-normalize-headings', function(t) {
  var parse = remark().data('settings', {position: false}).parse
  var run = remark().use(normalizeHeadings).runSync

  var input = [
    '# One',
    '# Two',
    '## Level 3',
    '### Level 4',
    '#### Level 5',
    '##### Level 6',
    '###### Level 7'
  ].join('\n\n')

  var output = [
    '# One',
    '## Two',
    '### Level 3',
    '#### Level 4',
    '##### Level 5',
    '###### Level 6',
    '###### Level 7'
  ].join('\n\n')

  t.deepEqual(run(parse(input)), parse(output))

  t.end()
})
