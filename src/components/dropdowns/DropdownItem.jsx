import PropTypes from 'prop-types';
import React from 'react';

const DropdownItem = props =>
  <div className="sg-dropdown__item-hole" onClick={() => props.onClick(props.id)}>
    <div className="sg-dropdown__item-text">
      {props.text}
    </div>
  </div>;

DropdownItem.propTypes = {
  onClick: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
};

export default DropdownItem;
