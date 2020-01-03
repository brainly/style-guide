// @flow strict

import React from 'react';
import type {Node} from 'react';
import * as SpinnerModule from '../spinner/Spinner';
import classnames from 'classnames';

const {default: Spinner} = SpinnerModule;

export {SPINNER_SIZE} from '../spinner/Spinner';

type PropsType = {
  loading?: boolean,
  light?: boolean,
  fullWidth?: boolean,
  size?: SpinnerModule.SpinnerSizeType,
  children?: Node,
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
