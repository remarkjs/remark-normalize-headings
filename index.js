'use strict';

var visit = require('mdast-util-visit');

module.exports = function () {
  return function (ast) {
    var title;
    var titleCount = 0;

    visit(ast, 'heading', function (node) {
      if (node.depth == 1 && !titleCount++) {
        title = node;
      }
    });

    if (!titleCount) {
      visit(ast, 'heading', function (node) {
        node.depth = 1;
        return false;
      });
    }

    if (titleCount > 1) {
      visit(ast, 'heading', function (node) {
        if (node !== title && node.depth < 6) {
          node.depth += 1;
        }
      });
    }

    return ast;
  };
};
