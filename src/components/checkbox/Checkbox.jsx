// @flow strict

import * as React from 'react';
import generateRandomString from '../../js/generateRandomString';
import Text from '../text/Text';

export type CheckboxPropsType = {
  checked?: boolean,
  children?: React.Node,
  className?: string,
  id?: string,
  name?: string,
  onChange: any,
  ...
};

const Checkbox = ({
  checked,
  children,
  className,
  id = generateRandomString(),
  name,
  onChange,
  ...props
}: CheckboxPropsType) => {
  return (
    <label htmlFor={id}>
      <input
        id={id}
        type="checkbox"
        checked={checked}
        name={name}
        onChange={onChange}
      />
      {children && (
        <Text
          size="small"
          type="span"
          weight="bold"
          className="sg-checkbox__label"
        >
          {children}
        </Text>
      )}
    </label>
  );
};

export default Checkbox;
