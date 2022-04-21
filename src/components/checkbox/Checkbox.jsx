// @flow strict

import * as React from 'react';

const Checkbox = ({...props}) => {
  return (
    <div {...props}>
      <input type="checkbox" />
      <label>Hello, I'm a checkbox</label>
    </div>
  );
};

export default Checkbox;
