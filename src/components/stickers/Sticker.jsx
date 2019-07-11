// @flow strict
import React from 'react';
import * as IconModule from '../icons/Icon';
import classNames from 'classnames';

const {TYPE} = IconModule;

type PropsType = {
  type: IconModule.IconTypeType,
  className?: string
};

const Sticker = ({type, className, ...props}: PropsType) => {
  const iconType = `#icon-${type}`;
  const stickerClass = classNames('sg-sticker', className);

  return (
    <svg {...props} className={stickerClass}>
      <use className="sg-sticker__back" xlinkHref={iconType} />
      <use className="sg-sticker__front" xlinkHref={iconType} />
    </svg>
  );
};

export default Sticker;
export {TYPE};
