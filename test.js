import assert from 'node:assert/strict'
import test from 'node:test'
import {remark} from 'remark'
import remarkNormalizeHeadings from './index.js'

test('remarkNormalizeHeadings', async function (t) {
  await t.test('should expose the public api', async function () {
    assert.deepEqual(Object.keys(await import('./index.js')).sort(), [
      'default'
    ])
  })

  await t.test('should work', async function () {
    assert.equal(
      String(
        await remark()
          .use(remarkNormalizeHeadings)
          .process(
            [
              '# One',
              '# Two',
              '## Level 3',
              '### Level 4',
              '#### Level 5',
              '##### Level 6',
              '###### Level 7'
            ].join('\n')
          )
      ),
      [
        '# One',
        '',
        '## Two',
        '',
        '### Level 3',
        '',
        '#### Level 4',
        '',
        '##### Level 5',
        '',
        '###### Level 6',
        '',
        '###### Level 7',
        ''
      ].join('\n')
    )
  })
})
