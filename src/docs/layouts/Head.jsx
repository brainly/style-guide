import React from 'react';
import PropTypes from 'prop-types';

const Head = ({page = {}, site = {}}) => <head>
  <meta charSet="utf-8"/>
  <title>{page.title || site.title}</title>
  <meta name="description" content={page.excerpt || site.description}/>

  <link rel="icon" type="image/x-icon" href="images/favicons/brainly/favicon.ico"/>
  <link rel="icon" sizes="192x192" href="images/favicons/brainly/favicon-hd.png"/>

  <meta name="theme-color" content="#6ED6A0"/>

  <link rel="stylesheet" href="../style-guide.css"/>
  <link rel="stylesheet" href={site.baseurl + '/css/main.css'}/>

  <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/9.12.0/styles/github.min.css"/>
  <script src="//cdnjs.cloudflare.com/ajax/libs/highlight.js/9.12.0/highlight.min.js"></script>

  <script src="https://cdnjs.cloudflare.com/ajax/libs/clipboard.js/1.6.0/clipboard.min.js"></script>
</head>;

Head.propTypes = {
  page: PropTypes.object,
  site: PropTypes.object
};

export default Head;
