import React from 'react';
import './docs-entry.scss';
import klassy from 'helpers/klassy';

var cl = klassy('docs-entry');

export default React.createClass({
  render () {
    return <article { ...cl() } >
      <h2 className="article-header"> { this.props.title }</h2>
      { this.props.children }
    </article>
  }
});
