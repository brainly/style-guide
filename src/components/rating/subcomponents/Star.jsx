import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Icon, {TYPE, ICON_COLOR} from '../../icons/Icon';

const Star = ({size, checked, onClick, index, ...props}) => {
  const starClass = classnames('sg-rate-box__star', {
    'sg-rate-box__star--checked': checked
  });
  const onClickStar = () => onClick(index);

  return (
    <span className={starClass} onClick={onClickStar} {...props}>
      <Icon type={TYPE.STAR} size={size} color={ICON_COLOR.ADAPTIVE} />
    </span>
  );
};

Star.propTypes = {
  index: PropTypes.number,
  size: PropTypes.number,
  checked: PropTypes.bool,
  onClick: PropTypes.func.isRequired
};

export default Star;
