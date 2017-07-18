import React from 'react';
import PropTypes from 'prop-types';

const HeaderRight = ({children}) => <div className="sg-header__right">
  {children}
</div>;

HeaderRight.propTypes = {
  children: PropTypes.node
};

export default HeaderRight;
