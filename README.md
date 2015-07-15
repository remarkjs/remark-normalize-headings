[![npm](https://nodei.co/npm/mdast-normalize-headings.png)](https://npmjs.com/package/mdast-normalize-headings)

# mdast-normalize-headings

[![Build Status][travis-badge]][travis] [![Dependency Status][david-badge]][david]

Providing multiple top-level headings per single Markdown document is confusing for tools that assume that there is only a single top-level heading that contains some meta-information (usually title) about the document.

This util makes sure that there is no more than a single top-level heading in the document by shifting all headings one level deeper if needed.

Originally extracted from [`mdast-man`][mdast-man] plugin.

[mdast-man]: https://github.com/woorm/mdast-man

[travis]: https://travis-ci.org/eush77/mdast-normalize-headings
[travis-badge]: https://travis-ci.org/eush77/mdast-normalize-headings.svg
[david]: https://david-dm.org/eush77/mdast-normalize-headings
[david-badge]: https://david-dm.org/eush77/mdast-normalize-headings.png

## Example

```js
var mdast = require('mdast');
var mdastNormalizeHeadings = requireq('mdast-normalize-headings');

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

var ast = mdast.parse(input);
mdastNormalizeHeadings(ast);

var output = mdast.stringify(ast);
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

#### `mdastNormalizeHeadings(ast)`

Modifies AST in-place and returns the reference for convenience.

## Install

```
npm install mdast-normalize-headings
```

## License

MIT
