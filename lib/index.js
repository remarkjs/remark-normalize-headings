/**
 * @typedef {import('mdast').Root} Root
 */

import {normalizeHeadings} from 'mdast-normalize-headings'

/**
 * Make sure there is a single top level heading in a document by adjusting
 * heading ranks accordingly.
 *
 * @returns
 *   Transform.
 */
export default function remarkNormalizeHeadings() {
  /**
   * Transform.
   *
   * @param {Root} tree
   *   Tree.
   * @returns {undefined}
   *   Nothing.
   */
  return function (tree) {
    normalizeHeadings(tree)
  }
}
