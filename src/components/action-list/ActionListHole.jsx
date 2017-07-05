import React from 'react';
import PropTypes from 'prop-types';

const ActionListHole = ({children}) =>
  <div className="sg-actions-list__hole">
    {children}
  </div>;

ActionListHole.propTypes = {
  children: PropTypes.node.isRequired
};

export default ActionListHole;
