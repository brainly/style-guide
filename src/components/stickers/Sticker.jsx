import React from 'react';
import PropTypes from 'prop-types';
import {TYPE} from '../icons/Icon';
import classNames from 'classnames';

const Sticker = ({type, className, ...props}) => {
  const iconType = `#icon-${type}`;
  const stickerClass = classNames('sg-sticker', className);

  return (
    <svg {...props} className={stickerClass}>
      <use className="sg-sticker__back" xlinkHref={iconType}></use>
      <use className="sg-sticker__front" xlinkHref={iconType}></use>
    </svg>
  );
};

Sticker.propTypes = {
  type: PropTypes.oneOf(Object.values(TYPE)).isRequired,
  className: PropTypes.string
};

export default Sticker;
export {TYPE};
