import React from 'react';
import MintButton from 'components/mint-button';

export default (props) => {
  return <div>
           <MintButton>Primary</MintButton>
           <MintButton size='small'>Secondary</MintButton>
         </div>
}
