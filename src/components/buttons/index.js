import React from 'react';
import './styles.scss';

export default (props) => {

  let block = props.size === 'small' ?  'mint-button-secondary' : 'mint-button-primary';

  return <a className={ block }>
           <div className={ block + '__hole' }>
             { props.children }
           </div>
         </a>
}
