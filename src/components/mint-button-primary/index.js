import React from 'react';
import './mint-button-primary.scss';
import pj from './package.json';
import klassy from 'helpers/klassy';
import Hole from 'components/component-base/hole';

export const availableTypes = {
  dark : 'dark',
  alt : 'alt'
};

export default ({ children, type='' }) => {
  const classes = klassy(pj);

  return <a { ...classes(null, type) }>
           <Hole { ...classes() }>
             { children }
           </Hole>
         </a>
}
