// @flow strict

import * as React from 'react';
import classNames from 'classnames';
import Text from '../text/Text';

type RadioColorType = 'light' | 'dark';

export type RadioPropsType = {
  children?: React.Node,
  className?: ?string,
  color?: ?RadioColorType,
  ...
};

const Radio = ({
  color = 'dark',
  children,
  className,
  ...props
}: RadioPropsType) => {
  const radioClass = classNames('sg-radio-new', className);

  return (
    <label {...props} className={radioClass}>
      <input className="sg-radio-new__element" type="radio" />
      {children !== undefined && children !== null && (
        <Text
          size="small"
          type="span"
          weight="bold"
          className="sg-radio-new__label"
        >
          {children}
        </Text>
      )}
    </label>
  );
};

export default Radio;
