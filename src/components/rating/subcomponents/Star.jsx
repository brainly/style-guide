import React from 'react';
import PropTypes from 'prop-types';
import Icon, {TYPE, ICON_COLOR} from '../../icons/Icon';

const Star = ({size, onClick}) =>
  <span className="sg-rate-box__star" onClick={onClick}>
    <Icon type={TYPE.STAR} size={size} color={ICON_COLOR.ADAPTIVE} />
  </span>;

Star.propTypes = {
  size: PropTypes.number,
  onClick: PropTypes.func.isRequired
};

export default Star;
