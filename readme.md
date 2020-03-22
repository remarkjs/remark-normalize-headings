# remark-normalize-headings

[![Build][build-badge]][build]
[![Coverage][coverage-badge]][coverage]
[![Downloads][downloads-badge]][downloads]
[![Size][size-badge]][size]
[![Sponsors][sponsors-badge]][collective]
[![Backers][backers-badge]][collective]
[![Chat][chat-badge]][chat]

[**remark**][remark] plugin to make sure that there is only one top-level
heading in a document by adjusting heading depths accordingly.

Providing multiple top-level headings per single Markdown document is confusing
for tools that assume that there is only a single top-level heading that
contains some meta-information (usually title) about the document.

## Install

[npm][]:

```sh
npm install remark-normalize-headings
```

## Use

Say we have the following file, `example.md`:

```markdown
# Title

# Description

## Usage

### Example

## API

# Related
```

And our script, `example.js`, looks as follows:

```js
var vfile = require('to-vfile')
var remark = require('remark')
var normalizeHeadings = require('remark-normalize-headings')

remark()
  .use(normalizeHeadings)
  .process(vfile.readSync('example.md'), function(err, file) {
    if (err) throw err
    console.log(String(file))
  })
```

Now, running `node example` yields:

```markdown
# Title

## Description

### Usage

#### Example

### API

## Related
```

## API

#### `remark().use(normalizeHeadings)`

Make sure that there is only one top-level heading in a document by adjusting
heading depths accordingly.

## Security

Use of `remark-normalize-headings` does not involve [**rehype**][rehype]
([**hast**][hast]) or user content so there are no openings for
[cross-site scripting (XSS)][xss] attacks.

## Related

*   [`mdast-normalize-headings`][mdast-normalize-headings]
    — [**mdast**][mdast] utility that is in the core of this plugin

## Contribute

See [`contributing.md`][contributing] in [`remarkjs/.github`][health] for ways
to get started.
See [`support.md`][support] for ways to get help.

This project has a [code of conduct][coc].
By interacting with this repository, organization, or community you agree to
abide by its terms.

## License

[MIT][license] © Eugene Sharygin

[build-badge]: https://img.shields.io/travis/remarkjs/remark-normalize-headings/master.svg

[build]: https://travis-ci.org/remarkjs/remark-normalize-headings

[coverage-badge]: https://img.shields.io/codecov/c/github/remarkjs/remark-normalize-headings.svg

[coverage]: https://codecov.io/github/remarkjs/remark-normalize-headings

[downloads-badge]: https://img.shields.io/npm/dm/remark-normalize-headings.svg

[downloads]: https://www.npmjs.com/package/remark-normalize-headings

[size-badge]: https://img.shields.io/bundlephobia/minzip/remark-normalize-headings.svg

[size]: https://bundlephobia.com/result?p=remark-normalize-headings

[sponsors-badge]: https://opencollective.com/unified/sponsors/badge.svg

[backers-badge]: https://opencollective.com/unified/backers/badge.svg

[collective]: https://opencollective.com/unified

[chat-badge]: https://img.shields.io/badge/chat-spectrum-7b16ff.svg

[chat]: https://spectrum.chat/unified/remark

[npm]: https://docs.npmjs.com/cli/install

[health]: https://github.com/remarkjs/.github

[contributing]: https://github.com/remarkjs/.github/blob/master/contributing.md

[support]: https://github.com/remarkjs/.github/blob/master/support.md

[coc]: https://github.com/remarkjs/.github/blob/master/code-of-conduct.md

[license]: license

[remark]: https://github.com/remarkjs/remark

[mdast]: https://github.com/syntax-tree/mdast

[mdast-normalize-headings]: https://github.com/syntax-tree/mdast-normalize-headings

[xss]: https://en.wikipedia.org/wiki/Cross-site_scripting

[rehype]: https://github.com/rehypejs/rehype

[hast]: https://github.com/syntax-tree/hast
