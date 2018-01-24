import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const List = ({spaced, className, children, ...props}) => {
  const listClass = classNames('sg-list', {
    'sg-list--spaced-elements': spaced
  }, className);

  return (
    <ul {...props} className={listClass}>
      {children}
    </ul>
  );
};

List.propTypes = {
  children: PropTypes.node,
  spaced: PropTypes.bool,
  className: PropTypes.string
};

export default List;