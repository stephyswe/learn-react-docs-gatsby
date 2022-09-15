/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * @emails react-core
 */

'use strict';

module.exports = {
  siteMetadata: {
    title: 'React: A JavaScript library for building user interfaces',
    siteUrl: 'https://reactjs.org',
    rssFeedTitle: 'React',
    rssFeedDescription: 'A JavaScript library for building user interfaces',
  },
  plugins: [
    'gatsby-plugin-glamor',

    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'content',
        path: `${__dirname}/content/`,
      },
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [],
      },
    },
  ],
};
