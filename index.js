/**
 * @typedef {import('mdast').Root} Root
 */

import {normalizeHeadings} from 'mdast-normalize-headings'

/**
 * Plugin to make sure that there is only one top-level heading in a document
 * by adjusting heading depths accordingly.
 *
 * @type {import('unified').Plugin<void[], Root>}
 */
export default function remarkNormalizeHeadings() {
  return normalizeHeadings
}
