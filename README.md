[![npm](https://nodei.co/npm/mdast-util-normalize-headings.png)](https://npmjs.com/package/mdast-util-normalize-headings)

# mdast-util-normalize-headings

[![Build Status][travis-badge]][travis] [![Dependency Status][david-badge]][david]

Providing multiple top-level headings per single Markdown document is confusing for tools that assume that there is only a single top-level heading that contains some meta-information (usually title) about the document.

This util makes sure that there is no more than a single top-level heading in the document by shifting all headings one level deeper if needed.

Originally extracted from [`mdast-man`][mdast-man] plugin.

[mdast-man]: https://github.com/woorm/mdast-man

[travis]: https://travis-ci.org/eush77/mdast-util-normalize-headings
[travis-badge]: https://travis-ci.org/eush77/mdast-util-normalize-headings.svg
[david]: https://david-dm.org/eush77/mdast-util-normalize-headings
[david-badge]: https://david-dm.org/eush77/mdast-util-normalize-headings.png

## Install

```
npm install mdast-util-normalize-headings
```

## License

MIT
