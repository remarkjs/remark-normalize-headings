'use strict'

var test = require('tape')
var remark = require('remark')
var normalizeHeadings = require('.')

test('remark-normalize-headings', function (t) {
  var parse = remark().data('settings', {position: false}).parse
  var run = remark().use(normalizeHeadings).runSync

  t.deepEqual(
    run(
      parse(
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
    ),
    parse(
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
  )

  t.end()
})
