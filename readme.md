# remark-normalize-headings

[![Build][build-badge]][build]
[![Coverage][coverage-badge]][coverage]
[![Downloads][downloads-badge]][downloads]
[![Size][size-badge]][size]
[![Sponsors][sponsors-badge]][collective]
[![Backers][backers-badge]][collective]
[![Chat][chat-badge]][chat]

**[remark][]** plugin to make sure there is a single top level heading in a
document by adjusting heading ranks accordingly.

## Contents

*   [What is this?](#what-is-this)
*   [When should I use this?](#when-should-i-use-this)
*   [Install](#install)
*   [Use](#use)
*   [API](#api)
    *   [`unified().use(remarkNormalizeHeadings)`](#unifieduseremarknormalizeheadings)
*   [Types](#types)
*   [Compatibility](#compatibility)
*   [Security](#security)
*   [Related](#related)
*   [Contribute](#contribute)
*   [License](#license)

## What is this?

This package is a [unified][] ([remark][]) plugin to ensure there is one top
level heading in a document.

## When should I use this?

This project is useful if you’re dealing with user generated content and want to
ensure that there is a single primary heading (usually the title of the
document) which everything else falls under.

## Install

This package is [ESM only][esm].
In Node.js (version 16+), install with [npm][]:

```sh
npm install remark-normalize-headings
```

In Deno with [`esm.sh`][esmsh]:

```js
import remarkNormalizeHeadings from 'https://esm.sh/remark-normalize-headings@4'
```

In browsers with [`esm.sh`][esmsh]:

```html
<script type="module">
  import remarkNormalizeHeadings from 'https://esm.sh/remark-normalize-headings@4?bundle'
</script>
```

## Use

Say we have the following file `example.md`:

```markdown
# Pluto

# History

## Discovery

## Name and symbol

## Planet X disproved

# Orbit
```

…and a module `example.js`:

```js
import {remark} from 'remark'
import remarkNormalizeHeadings from 'remark-normalize-headings'
import {read} from 'to-vfile'

const file = await remark()
  .use(remarkNormalizeHeadings)
  .process(await read('example.md'))

console.log(String(file))
```

…then running `node example.js` yields:

```markdown
# Pluto

## History

### Discovery

### Name and symbol

### Planet X disproved

## Orbit
```

## API

This package exports no identifiers.
The default export is
[`remarkNormalizeHeadings`][api-remark-normalize-headings].

### `unified().use(remarkNormalizeHeadings)`

Make sure there is a single top level heading in a document by adjusting
heading ranks accordingly.

###### Parameters

There are no parameters.

###### Returns

Transform ([`Transformer`][unified-transformer]).

## Types

This package is fully typed with [TypeScript][].
It exports no additional types.

## Compatibility

Projects maintained by the unified collective are compatible with maintained
versions of Node.js.

When we cut a new major release, we drop support for unmaintained versions of
Node.
This means we try to keep the current release line,
`remark-normalize-headings@^4`, compatible with Node.js 16.

This plugin works with `unified` version 2+ and `remark` version 3+.

## Security

Use of `remark-normalize-headings` does not involve **[rehype][]**
(**[hast][]**) or user content so there are no openings for
[cross-site scripting (XSS)][wiki-xss] attacks.

## Related

*   [`mdast-normalize-headings`][mdast-normalize-headings]
    — mdast utility with similar functionality

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

[size-badge]: https://img.shields.io/bundlejs/size/remark-normalize-headings

[size]: https://bundlejs.com/?q=remark-normalize-headings

[sponsors-badge]: https://opencollective.com/unified/sponsors/badge.svg

[backers-badge]: https://opencollective.com/unified/backers/badge.svg

[collective]: https://opencollective.com/unified

[chat-badge]: https://img.shields.io/badge/chat-discussions-success.svg

[chat]: https://github.com/remarkjs/remark/discussions

[npm]: https://docs.npmjs.com/cli/install

[esm]: https://gist.github.com/sindresorhus/a39789f98801d908bbc7ff3ecc99d99c

[esmsh]: https://esm.sh

[health]: https://github.com/remarkjs/.github

[contributing]: https://github.com/remarkjs/.github/blob/main/contributing.md

[support]: https://github.com/remarkjs/.github/blob/main/support.md

[coc]: https://github.com/remarkjs/.github/blob/main/code-of-conduct.md

[license]: license

[hast]: https://github.com/syntax-tree/hast

[mdast-normalize-headings]: https://github.com/syntax-tree/mdast-normalize-headings

[rehype]: https://github.com/rehypejs/rehype

[remark]: https://github.com/remarkjs/remark

[typescript]: https://www.typescriptlang.org

[unified]: https://github.com/unifiedjs/unified

[unified-transformer]: https://github.com/unifiedjs/unified#transformer

[wiki-xss]: https://en.wikipedia.org/wiki/Cross-site_scripting

[api-remark-normalize-headings]: #unifieduseremarknormalizeheadings
