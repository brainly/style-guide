import React from 'react';
import PropTypes from 'prop-types';

const ListItem = ({children}) => (
  <li className="sg-list__element">
    {children}
  </li>
);

ListItem.propTypes = {
  children: PropTypes.node
};

export default ListItem;
