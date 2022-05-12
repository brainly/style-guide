// @flow strict

import * as React from 'react';
import classNames from 'classnames';
import Text from '../text/Text';
import generateRandomString from '../../js/generateRandomString';

type RadioColorType = 'light' | 'dark';

export type RadioPropsType = {
  children?: React.Node,
  className?: ?string,
  color?: ?RadioColorType,
  id?: string,
  customLabelId?: string,
  ...
};

const Radio = ({
  color = 'dark',
  children,
  className,
  id,
  customLabelId,
  ...props
}: RadioPropsType) => {
  const {current: radioId} = React.useRef(
    id === undefined || id === '' ? generateRandomString() : id
  );

  const radioClass = classNames('sg-radio-new', className);
  const labelId = customLabelId || `${radioId}-label`;

  return (
    <div>
      <input
        className="sg-radio-new__element"
        type="radio"
        id={radioId}
        aria-labelledby={labelId}
      />
      {children !== undefined && children !== null && (
        <label {...props} id={labelId} className={radioClass} htmlFor={radioId}>
          <Text
            size="small"
            type="span"
            weight="bold"
            className="sg-radio-new__label"
          >
            {children}
          </Text>
        </label>
      )}
    </div>
  );
};

export default Radio;
