// @flow strict

import * as React from 'react';
import classNames from 'classnames';
import LabelDeprecatedIcon from './subcomponents/LabelDeprecatedIcon';
import type {IconColorType, IconTypeType} from '../icons/Icon';
import {ICON_COLOR, TYPE as ICON_TYPE} from '../icons/Icon';

type SizeType = 'small' | 'normal' | 'large';

export const SIZE = {
  SMALL: 'small',
  NORMAL: 'normal',
  LARGE: 'large',
};

export const ICON_SIZE = {
  [SIZE.SMALL]: 16,
  [SIZE.NORMAL]: 24,
  [SIZE.LARGE]: 32,
};

export type LabelDeprecatedPropsType = {
  text?: string,
  htmlFor?: string,
  children?: ?React.Node,
  iconContent?: ?React.Element<*>,
  iconColor?: IconColorType,
  iconType?: IconTypeType,
  size?: SizeType,
  number?: number,
  secondary?: boolean,
  unstyled?: boolean,
  emphasised?: boolean,
  elementsToTop?: boolean,
  className?: string,
  ...
};

const LabelDeprecated = (props: LabelDeprecatedPropsType) => {
  const {
    size = SIZE.NORMAL,
    text,
    children,
    number,
    iconContent,
    iconType,
    iconColor,
    htmlFor,
    secondary,
    unstyled,
    emphasised,
    elementsToTop,
    className,
    ...restProps
  } = props;

  const labelClass = classNames(
    'sg-label-deprecated',
    {
      [`sg-label-deprecated--${size}`]: size !== SIZE.NORMAL,
      'sg-label-deprecated--secondary': secondary,
      'sg-label-deprecated--unstyled': unstyled,
      'sg-label-deprecated--emphasised': emphasised,
      'sg-label-deprecated--elements-to-the-top': elementsToTop,
    },
    className
  );

  let textElement;
  let numberElement;

  if (text !== undefined && text !== '') {
    textElement = (
      <label className="sg-label-deprecated__text" htmlFor={htmlFor}>
        {text}
      </label>
    );
  }
  if (number !== undefined) {
    numberElement = <div className="sg-label-deprecated__number">{number}</div>;
  }

  return (
    <div {...restProps} className={labelClass}>
      <LabelDeprecatedIcon
        iconContent={iconContent}
        iconType={iconType}
        iconColor={iconColor}
        iconSize={ICON_SIZE[size]}
      />
      {textElement}
      {numberElement}
      {children}
    </div>
  );
};

export default LabelDeprecated;
export {ICON_TYPE, ICON_COLOR, LabelDeprecatedIcon};
