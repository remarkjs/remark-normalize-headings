'use strict'

var test = require('tape')
var remark = require('remark')
var removePosition = require('unist-util-remove-position')
var normalizeHeadings = require('.')

test('remark-normalize-headings', function (t) {
  var actual = remark().parse(
    [
      '# One',
      '# Two',
      '## Level 3',
      '### Level 4',
      '#### Level 5',
      '##### Level 6',
      '###### Level 7'
    ].join('\n\n')
  )

  remark().use(normalizeHeadings).runSync(actual)

  var expected = remark().parse(
    [
      '# One',
      '## Two',
      '### Level 3',
      '#### Level 4',
      '##### Level 5',
      '###### Level 6',
      '###### Level 7'
    ].join('\n\n')
  )

  t.deepEqual(removePosition(actual), removePosition(expected))

  t.end()
})
