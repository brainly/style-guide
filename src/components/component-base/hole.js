import React from 'react';

export default ({ className, children }) => {
  return <div className={ className + '__hole' }>
    { children }
  </div>
}
