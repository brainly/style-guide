// @flow

import React from 'react';

type PropsType = {
  page?: {
    title: string,
    excerpt: string
  },
  site?: {
    title: string,
    description: string,
    baseurl: string
  }
};

const Head = ({page = {}, site = {}}: PropsType) => (
  <head>
    <meta charSet="utf-8" />
    <title>{page.title || site.title}</title>
    <meta name="description" content={page.excerpt || site.description} />

    <link rel="icon" type="image/x-icon" href="images/favicons/brainly/favicon.ico" />
    <link rel="icon" sizes="192x192" href="images/favicons/brainly/favicon-hd.png" />

    <meta name="theme-color" content="#6ED6A0" />

    <link rel="stylesheet" href="../style-guide.css" />
    <link rel="stylesheet" href={`${site.baseurl}/css/main.css`} />

    <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/9.12.0/styles/github.min.css" />
    <script src="//cdnjs.cloudflare.com/ajax/libs/highlight.js/9.12.0/highlight.min.js" />

    <script src="https://cdnjs.cloudflare.com/ajax/libs/clipboard.js/1.6.0/clipboard.min.js" />
  </head>
);

export default Head;
