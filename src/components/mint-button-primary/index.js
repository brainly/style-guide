import React from 'react';
import './mint-button-primary.scss';
import pj from './package.json';
import klassy from 'helpers/klassy';
import Hole from 'components/component-base/hole';
import widthScale from 'components/values/widthScale';
import combineMods from 'helpers/combineMods';

export const availableTypes = {
  dark: 'dark',
  alt: 'alt'
};

export const availableWidth = {
  full: widthScale.full
};

const classes = klassy(pj);

export default React.createClass({
  render () {
    let mod = combineMods(this.props.type, this.props.width);
    return (
      <a { ...classes(null, mod) }>
        <Hole { ...classes() }>
          { this.props.children }
        </Hole>
      </a>
    )
  }
});
