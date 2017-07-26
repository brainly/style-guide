import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import SubjectIcon, {TYPE, SIZE} from './SubjectIcon';

const SubjectIconBox = ({type, size = SIZE.NORMAL, darker}) => {
  const boxClass = classNames('sg-subject-icon-box', {
    'sg-subject-icon-box--darker': darker
  });

  return <div className={boxClass}>
    <SubjectIcon type={type} size={size}/>
  </div>;
};

SubjectIconBox.propTypes = {
  darker: PropTypes.bool,
  type: PropTypes.oneOf(Object.values(TYPE)).isRequired,
  size: PropTypes.oneOf(Object.values(SIZE))
};

export default SubjectIconBox;
export {TYPE, SIZE};
