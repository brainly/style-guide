import React from 'react';
import klassy from 'helpers/klassy';
import './docs-block.scss';

var cl = klassy('docs-block');

export default React.createClass({
  render () {
    return <section { ...cl() } >
      <aside { ...cl('info') } >
        <h3 { ...cl('header') }> { this.props.title }</h3>
      </aside>
      <div { ...cl('content') }>
        { this.props.children }
      </div>
    </section>
  }
});
