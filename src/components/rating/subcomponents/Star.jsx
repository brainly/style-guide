import React from 'react';
import PropTypes from 'prop-types';
import Icon, {TYPE, ICON_COLOR} from '../../icons/Icon';

const Star = ({size, ...props}) => (
  <span className="sg-rate-box__star" {...props}>
    <Icon type={TYPE.STAR} size={size} color={ICON_COLOR.ADAPTIVE} />
  </span>
);

Star.propTypes = {
  size: PropTypes.number
};

export default Star;
