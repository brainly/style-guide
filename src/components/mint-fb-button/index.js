import MintButton from 'components/mint-button-primary';
import './mint-fb-button.scss';
import React from 'react';

export default React.createClass({
  render () {
    return (
      <MintButton type="fb">
        Facebook
      </MintButton>
    )
  }
});

