import React from 'react';
import './mint-button-secondary.scss';
import pj from './package.json';
import klassy from 'helpers/klassy';
import Hole from 'components/component-base/hole';

export const availableTypes = {
  dark: 'dark', alt: 'alt'
};

const classes = klassy(pj);

export default React.createClass({
  render () {
    return <a { ...classes(null, this.props.type) }>
      <Hole { ...classes() }>
        { this.props.children }
      </Hole>
    </a>
  }
});
