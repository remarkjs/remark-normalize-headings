'use strict';

var visit = require('mdast-util-visit');


module.exports = function (ast) {
  var title;
  var titleCount = 0;

  visit(ast, 'heading', function (node) {
    if (node.depth == 1 && !titleCount++) {
      title = node;
    }
  });

  if (titleCount > 1) {
    visit(ast, 'heading', function (node) {
      if (node !== title) {
        node.depth += 1;
      }
    });
  }

  return ast;
};
