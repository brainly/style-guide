import React from 'react';
import './mint-button.scss';
import pj from './package.json';
import klassy from '../../klassy';


export default (props) => {
  const classes = klassy(pj, {
    name: props.size === 'small' ? `${pj.name}-secondary` : `${pj.name}-primary`
  });

  return <a { ...classes() }>
           <div { ...classes('hole') }>
             { props.children }
           </div>
         </a>
}
