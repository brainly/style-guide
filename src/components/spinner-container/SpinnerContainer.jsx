// @flow strict

import * as React from 'react';
import type {SpinnerSizeType} from '../spinner/Spinner';
import Spinner from '../spinner/Spinner';
import classnames from 'classnames';

export {SPINNER_SIZE} from '../spinner/Spinner';

type PropsType = {
  loading?: boolean,
  light?: boolean,
  fullWidth?: boolean,
  size?: SpinnerSizeType,
  children?: React.Node,
  ...
};

const SpinnerContainer = ({
  loading,
  light,
  fullWidth,
  size,
  children,
  ...props
}: PropsType) => (
  <div
    {...props}
    className={classnames('sg-spinner-container', {
      'sg-spinner-container--full-width': fullWidth,
    })}
  >
    {children}
    {loading === true && (
      <div className="sg-spinner-container__overlay">
        <Spinner light={light} size={size} />
      </div>
    )}
  </div>
);

export default SpinnerContainer;
