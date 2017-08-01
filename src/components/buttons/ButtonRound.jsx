import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const ButtonRound = ({label, children, href = '#', onClick = () => undefined, className, ...props}) => {
  let labelElem;

  if (label) {
    labelElem = <span className="sg-button-primary-round__label">{label}</span>;
  }
  const buttonClass = classnames('sg-button-primary-round', className);

  return (
    <a {...props} href={href} onClick={onClick} className={buttonClass}>
      <div className="sg-button-primary-round__icon">
        {children}
      </div>
      {labelElem}
    </a>
  );
};


ButtonRound.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired,
  href: PropTypes.string,
  label: PropTypes.string,
  className: PropTypes.string
};

export default ButtonRound;
