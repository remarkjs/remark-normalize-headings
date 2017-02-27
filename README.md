[![npm](https://nodei.co/npm/remark-normalize-headings.png)](https://npmjs.com/package/remark-normalize-headings)

# remark-normalize-headings

[![Build Status][travis-badge]][travis] [![Dependency Status][david-badge]][david]

Providing multiple top-level headings per single Markdown document is confusing for tools that assume that there is only a single top-level heading that contains some meta-information (usually title) about the document.

This [remark] plugin makes sure that there is only one top-level heading in the document by adjusting headings depths accordingly.

Originally extracted from [remark-man].

[remark]: https://github.com/wooorm/remark
[remark-man]: https://github.com/wooorm/remark-man
[mdast]: https://github.com/wooorm/mdast
[mdast-normalize-headings]: https://github.com/eush77/mdast-normalize-headings

[travis]: https://travis-ci.org/eush77/remark-normalize-headings
[travis-badge]: https://travis-ci.org/eush77/remark-normalize-headings.svg
[david]: https://david-dm.org/eush77/remark-normalize-headings
[david-badge]: https://david-dm.org/eush77/remark-normalize-headings.png

## Example

```js
var normalizeHeadings = require('remark-normalize-headings');

var input = '# Title\n\n# Description\n\n## Usage\n\n### Example\n\n## API\n\n# Related';
// # Title
//
// # Description
//
// ## Usage
//
// ### Example
//
// ## API
//
// # Related
//

remark().use(normalizeHeadings).processSync(input).toString();
// # Title
//
// ## Description
//
// ### Usage
//
// #### Example
//
// ### API
//
// ## Related
//
```

## API

#### `remark().use(normalizeHeadings)`

Modifies AST in-place.

## CLI

```
$ remark -u remark-normalize-headings
```

## Related

- [mdast-normalize-headings] — [mdast] transformation utility that is in the core of this plugin.

## Install

```
npm install remark-normalize-headings
```

## License

MIT
