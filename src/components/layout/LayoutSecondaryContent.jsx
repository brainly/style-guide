import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const LayoutSecondaryContent = ({children, className, ...props}) => {
  const layoutClass = classnames('sg-layout__secondary-content', className);

  return (
    <div {...props} className={layoutClass}>
      {children}
    </div>
  );
};

LayoutSecondaryContent.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string
};

export default LayoutSecondaryContent;
