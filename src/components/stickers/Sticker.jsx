import React from 'react';
import PropTypes from 'prop-types';
import {TYPE} from 'icons/Icon';

const Sticker = ({type}) => {
  const iconType = `#icon-${type}`;

  return <svg className="sg-sticker">
    <use className="sg-sticker__back" xlinkHref={iconType}></use>
    <use className="sg-sticker__front" xlinkHref={iconType}></use>
  </svg>;
};

Sticker.propTypes = {
  type: PropTypes.oneOf(Object.values(TYPE)).isRequired
};

export default Sticker;
export {TYPE};
