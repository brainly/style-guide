import React from 'react';
import PropTypes from 'prop-types';

const HeaderLeft = ({children}) => <div className="sg-header__left">
  {children}
</div>;

HeaderLeft.propTypes = {
  children: PropTypes.node
};

export default HeaderLeft;
