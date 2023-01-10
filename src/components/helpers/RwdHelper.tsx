import * as React from 'react';
import classNames from 'classnames';

type RwdHelperTypeType =
  | 'small-only'
  | 'medium-only'
  | 'medium-down'
  | 'medium-up'
  | 'large-only';
export const TYPE = {
  SMALL_ONLY: 'small-only',
  MEDIUM_ONLY: 'medium-only',
  MEDIUM_DOWN: 'medium-down',
  MEDIUM_UP: 'medium-up',
  LARGE_ONLY: 'large-only',
};
export type RwdHelperPropsType = {
  hide: RwdHelperTypeType;
  children: React.ReactElement<any> | string;
} & Omit<React.AllHTMLAttributes<HTMLElement>, 'hide' | 'children'>;

const RwdHelper = ({hide, children}: RwdHelperPropsType) => {
  if (!children) {
    return null;
  }

  const hideClass = `sg-hide-for-${hide}`;

  if (typeof children === 'string') {
    return <span className={hideClass}>{children}</span>;
  }

  const finalClassName = classNames(children.props.className, hideClass);
  return React.cloneElement(children, {
    className: finalClassName,
  });
};

export default RwdHelper;
