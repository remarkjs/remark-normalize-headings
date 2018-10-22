# remark-normalize-headings [![Build Status][build-badge]][build-status] [![Chat][chat-badge]][chat]

Providing multiple top-level headings per single Markdown document is confusing
for tools that assume that there is only a single top-level heading that
contains some meta-information (usually title) about the document.

This [**remark**][remark] plugin makes sure that there is only one top-level
heading in the document by adjusting heading depths accordingly.

Originally extracted from [`remark-man`][remark-man].

## Installation

[npm][]:

```bash
npm install remark-normalize-headings
```

## Usage

Say we have the following file, `example.md`:

```md
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

```md
# Title

## Description

### Usage

#### Example

### API

## Related
```

## API

#### `remark().use(normalizeHeadings)`

Transform the tree to normalize headings.

## Related

*   [`mdast-normalize-headings`][mdast-normalize-headings]
    — [mdast][] transformation utility that is in the core of this plugin

## Contribute

See [`contributing.md` in `remarkjs/remark`][contributing] for ways to get
started.

This organisation has a [Code of Conduct][coc].  By interacting with this
repository, organisation, or community you agree to abide by its terms.

## License

[MIT][license] © Eugene Sharygin

[build-badge]: https://img.shields.io/travis/remarkjs/remark-normalize-headings.svg

[build-status]: https://travis-ci.org/remarkjs/remark-normalize-headings

[chat-badge]: https://img.shields.io/gitter/room/remarkjs/Lobby.svg

[chat]: https://gitter.im/remarkjs/Lobby

[license]: license

[npm]: https://docs.npmjs.com/cli/install

[contributing]: https://github.com/remarkjs/remark/blob/master/contributing.md

[coc]: https://github.com/remarkjs/remark/blob/master/code-of-conduct.md

[remark]: https://github.com/remarkjs/remark

[remark-man]: https://github.com/remarkjs/remark-man

[mdast]: https://github.com/syntax-tree/mdast

[mdast-normalize-headings]: https://github.com/syntax-tree/mdast-normalize-headings
