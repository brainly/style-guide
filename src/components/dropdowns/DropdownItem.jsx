import PropTypes from 'prop-types';
import React from 'react';

const DropdownItem = ({text, onClick}) => (
  <div className="sg-dropdown__item-hole" onClick={onClick}>
    <div className="sg-dropdown__item-text">
      {text}
    </div>
  </div>
);

DropdownItem.propTypes = {
  onClick: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired
};

export default DropdownItem;
