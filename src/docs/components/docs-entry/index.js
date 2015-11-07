import React from 'react';
import './docs-entry.scss';
import klassy from 'helpers/klassy';

var cl = klassy('docs-entry');

export default (props) => {
  return <article { ...cl() } >
    <h2 className="article-header"> { props.title }</h2>
    { props.children }
  </article>
}
