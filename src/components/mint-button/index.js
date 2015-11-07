import React from 'react';
import sizes from 'components/values/2dScale';
import './mint-button.scss';
import pj from './package.json';
import klassy from 'helpers/klassy';
import Hole from 'components/component-base/hole';

export const availableSizes = {
  small: sizes.small,
  medium: sizes.medium
};

export default ({ children, size }) => {
  const classes = klassy(pj, {
    name: size === sizes.small ? `${pj.name}-secondary` : `${pj.name}-primary`
  });

  return <a { ...classes() }>
           <Hole { ...classes() }>
             { children }
           </Hole>
         </a>
}
