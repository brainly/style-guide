// @flow strict

import * as React from 'react';
import Spinner from '../spinner/Spinner';
import type {SpinnerColorType, SpinnerSizeType} from '../spinner/Spinner';
import classnames from 'classnames';

export {SPINNER_SIZE, SPINNER_COLOR} from '../spinner/Spinner';

export type SpinnerContainerPropsType = {
  loading?: boolean,
  color?: SpinnerColorType,
  fullWidth?: boolean,
  size?: SpinnerSizeType,
  children?: React.Node,
  ...
};

const SpinnerContainer = ({
  loading,
  color,
  fullWidth,
  size,
  children,
  ...props
}: SpinnerContainerPropsType) => (
  <div
    {...props}
    className={classnames('sg-spinner-container', {
      'sg-spinner-container--full-width': fullWidth,
    })}
  >
    {children}
    {loading === true && (
      <div className="sg-spinner-container__overlay">
        <Spinner color={color} size={size} />
      </div>
    )}
  </div>
);

export default SpinnerContainer;
