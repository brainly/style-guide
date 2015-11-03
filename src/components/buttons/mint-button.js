import React from 'react';

export default (props) => {
  return <a className="mint-button-primary">
           <div className="mint-button-primary__hole">
             { props.children }
           </div>
         </a>
}
