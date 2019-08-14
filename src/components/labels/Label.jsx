// @flow strict

import * as React from 'react';
import type {Node} from 'react';
import classNames from 'classnames';
import LabelIcon from './subcomponents/LabelIcon';
import * as IconModule from '../icons/Icon';

const {ICON_COLOR, TYPE: ICON_TYPE} = IconModule;

type SizeType = 'normal' | 'small' | 'large';

export const SIZE = {
  NORMAL: 'normal',
  SMALL: 'small',
  LARGE: 'large',
};

export const ICON_SIZE = {
  [SIZE.NORMAL]: 16,
  [SIZE.SMALL]: 18,
  [SIZE.LARGE]: 24,
};

type PropsType = {
  text?: string,
  htmlFor?: string,
  children?: ?Node,
  iconContent?: ?React.Element<*>,
  iconColor?: IconModule.IconColorType,
  iconType?: IconModule.IconTypeType,
  size?: SizeType,
  number?: number,
  secondary?: boolean,
  unstyled?: boolean,
  emphasised?: boolean,
  elementsToTop?: boolean,
  className?: string,
  ...
};

const Label = (props: PropsType) => {
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
    'sg-label',
    {
      [`sg-label--${size}`]: size !== SIZE.NORMAL,
      'sg-label--secondary': secondary,
      'sg-label--unstyled': unstyled,
      'sg-label--emphasised': emphasised,
      'sg-label--elements-to-the-top': elementsToTop,
    },
    className
  );

  let textElement;
  let numberElement;

  if (text !== undefined && text !== '') {
    textElement = (
      <label className="sg-label__text" htmlFor={htmlFor}>
        {text}
      </label>
    );
  }
  if (number !== undefined) {
    numberElement = <div className="sg-label__number">{number}</div>;
  }

  return (
    <div {...restProps} className={labelClass}>
      <LabelIcon
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

export default Label;
export {ICON_TYPE, ICON_COLOR, LabelIcon};
