import React from 'react';

export default React.createClass({
  render () {
    return <div className={ this.props.className + '__hole' }>
      { this.props.children }
    </div>
  }
});
