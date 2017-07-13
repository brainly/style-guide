import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const SubjectIconBox = ({children, darker}) => {
  const boxClass = classNames('sg-subject-icon-box', {
    'sg-subject-icon-box--darker': darker
  });

  return <div className={boxClass}>
    {children}
  </div>;
};

SubjectIconBox.propTypes = {
  darker: PropTypes.bool,
  children: PropTypes.element.isRequired
};

export default SubjectIconBox;
