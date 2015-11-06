import React from 'react';
import klassy from '../klassy';

var cl = klassy('docs-block');

export default (props) => {
  return <section { ...cl() } >
    <aside { ...cl('info') } >
      <h3 { ...cl('header') }> { props.title }</h3>
    </aside>
    <div { ...cl('content') }>
      { props.children }
    </div>
  </section>
}
