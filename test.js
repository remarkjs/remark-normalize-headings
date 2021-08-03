import test from 'tape'
import remark from 'remark'
import removePosition from 'unist-util-remove-position'
import normalizeHeadings from './index.js'

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
