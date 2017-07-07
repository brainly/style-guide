import React from 'react';
import Icon, {TYPE, colors} from '../icons/Icon';
import classnames from 'classnames';
import PropTypes from 'prop-types';

const Star = ({size, checked, onClick}) => {
  const starClass = classnames('sg-rate-box__star', {
    'sg-rate-box__star--checked': checked
  });

  return <span className={starClass} onClick={onClick}>
    <Icon type={TYPE.star} size={size} color={colors.adaptive}/>
  </span>;
};

Star.propTypes = {
  size: PropTypes.number,
  checked: PropTypes.bool,
  onClick: PropTypes.func.isRequired
};

export default Star;
