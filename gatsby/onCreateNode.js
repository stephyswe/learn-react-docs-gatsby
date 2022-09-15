/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * @emails react-core
 */

'use strict';

// Add custom fields to MarkdownRemark nodes.
module.exports = exports.onCreateNode = ({node, actions, getNode}) => {
  const {createNodeField} = actions;

  switch (node.internal.type) {
    case 'MarkdownRemark':
      const {permalink} = node.frontmatter;
      const {relativePath} = getNode(node.parent);

      let slug = permalink;

      if (!slug) {
        // This will likely only happen for the partials in /content/home.
        slug = `/${relativePath.replace('.md', '.html')}`;
      }

      // Used to generate URL to view this content.
      createNodeField({
        node,
        name: 'slug',
        value: slug,
      });

      return;
  }
};
