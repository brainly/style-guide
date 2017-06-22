import React from 'react';
import PropTypes from 'prop-types';

const ButtonRound = ({label, children, href = '#', onClick = () => undefined, ...props}) =>
  <a {...props} href={href} onClick={onClick} className="sg-button-primary-round">
    <div className="sg-button-primary-round__icon">
      {children}
    </div>
    <span className="sg-button-primary-round__label">{label}</span>
  </a>;


ButtonRound.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired,
  href: PropTypes.string,
  label: PropTypes.string
};

export default ButtonRound;
