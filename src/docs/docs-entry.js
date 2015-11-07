import React from 'react';
import klassy from '../klassy';

var cl = klassy('docs-entry');

export default (props) => {
  return <article { ...cl() } >
    <h2 className="article-header"> { props.title }</h2>
    { props.children }
  </article>
}
