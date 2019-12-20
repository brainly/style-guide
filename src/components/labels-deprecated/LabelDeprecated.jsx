// @flow strict

import * as React from 'react';
import type {Node} from 'react';
import classNames from 'classnames';
import LabelDeprecatedIcon from './subcomponents/LabelDeprecatedIcon';
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

const LabelDeprecated = (props: PropsType) => {
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
