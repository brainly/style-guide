// @flow strict

import * as React from 'react';
import Spinner from '../spinner/Spinner';
import classnames from 'classnames';

export {SPINNER_SIZE, SPINNER_COLOR} from '../spinner/Spinner';
export type SpinnerContainerSizeType = 'small' | 'xsmall' | 'xxsmall';

export type SpinnerContainerColorType =
  | 'black'
  | 'white'
  | 'gray-900'
  | 'gray-700'
  | 'peach-700'
  | 'mustard-700'
  | 'blue-700';

export type SpinnerContainerPropsType = {
  loading?: boolean,
  color?: SpinnerContainerColorType,
  fullWidth?: boolean,
  size?: SpinnerContainerSizeType,
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
