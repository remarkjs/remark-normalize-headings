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

## Note!

This plugin is ready for the new parser in remark
([`remarkjs/remark#536`](https://github.com/remarkjs/remark/pull/536)).
No change is needed: it works exactly the same now as it did before!

## Install

This package is [ESM only](https://gist.github.com/sindresorhus/a39789f98801d908bbc7ff3ecc99d99c):
Node 12+ is needed to use it and it must be `import`ed instead of `require`d.

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
import {readSync} from 'to-vfile'
import {remark} from 'remark'
import remarkNormalizeHeadings from 'remark-normalize-headings'

const file = readSync('example.md')

remark()
  .use(remarkNormalizeHeadings)
  .process(file)
  .then((file) => {
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

This package exports no identifiers.
The default export is `remarkNormalizeHeadings`.

#### `unified().use(remarkNormalizeHeadings)`

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

[build-badge]: https://github.com/remarkjs/remark-normalize-headings/workflows/main/badge.svg

[build]: https://github.com/remarkjs/remark-normalize-headings/actions

[coverage-badge]: https://img.shields.io/codecov/c/github/remarkjs/remark-normalize-headings.svg

[coverage]: https://codecov.io/github/remarkjs/remark-normalize-headings

[downloads-badge]: https://img.shields.io/npm/dm/remark-normalize-headings.svg

[downloads]: https://www.npmjs.com/package/remark-normalize-headings

[size-badge]: https://img.shields.io/bundlephobia/minzip/remark-normalize-headings.svg

[size]: https://bundlephobia.com/result?p=remark-normalize-headings

[sponsors-badge]: https://opencollective.com/unified/sponsors/badge.svg

[backers-badge]: https://opencollective.com/unified/backers/badge.svg

[collective]: https://opencollective.com/unified

[chat-badge]: https://img.shields.io/badge/chat-discussions-success.svg

[chat]: https://github.com/remarkjs/remark/discussions

[npm]: https://docs.npmjs.com/cli/install

[health]: https://github.com/remarkjs/.github

[contributing]: https://github.com/remarkjs/.github/blob/HEAD/contributing.md

[support]: https://github.com/remarkjs/.github/blob/HEAD/support.md

[coc]: https://github.com/remarkjs/.github/blob/HEAD/code-of-conduct.md

[license]: license

[remark]: https://github.com/remarkjs/remark

[mdast]: https://github.com/syntax-tree/mdast

[mdast-normalize-headings]: https://github.com/syntax-tree/mdast-normalize-headings

[xss]: https://en.wikipedia.org/wiki/Cross-site_scripting

[rehype]: https://github.com/rehypejs/rehype

[hast]: https://github.com/syntax-tree/hast
